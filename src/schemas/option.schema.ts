import { z } from 'zod';
import { OptionSchema as OptionModelSchema } from '../prisma/schemas/models/Option.schema';
import { unwrapNullish } from './utils';

/**
 * Poll options come in two shapes backed by one table: a choice option is just
 * a label, a slider option adds the labels for its two ends. The poll schemas
 * pick the right one from their discriminated union on the poll type.
 */

export { OptionModelSchema };
export type OptionDTO = z.infer<typeof OptionModelSchema>;

const requiredText = OptionModelSchema.shape.text
  .min(1, 'Label required')
  .max(255, 'Max 255 characters');

/**
 * An untouched text input posts `''`, which would satisfy `.max(255)` and be
 * written as an empty label. Rewrite it to `undefined` before validation so
 * the column stays null instead.
 */
const emptyToUndefined = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess((val) => (val === '' ? undefined : val), schema.nullish());

/** Both slider ends share one rule; leaving them unset is allowed. */
const sliderLabel = emptyToUndefined(
  unwrapNullish(OptionModelSchema.shape.sliderLeftLabel).max(
    255,
    'Max 255 characters',
  ),
);

/**
 * On update an option that carries an `id` is an existing row being edited and
 * one without is a new row to insert, which is how the service tells the two
 * apart in a single submitted list.
 */
const optionalId = OptionModelSchema.shape.id.optional();

/**
 * The columns a client actually sends: the model minus the server-owned ones
 * (id, pollId, soft delete) and minus the slider labels, which only the slider
 * variant adds back.
 */
const OptionSchema = OptionModelSchema.omit({
  id: true,
  deletedAt: true,
  pollId: true,
  sliderLeftLabel: true,
  sliderRightLabel: true,
}).extend({
  text: requiredText,
});

export const ChoiceOptionSchema = OptionSchema;

export const SliderOptionSchema = OptionSchema.extend({
  sliderLeftLabel: sliderLabel,
  sliderRightLabel: sliderLabel,
});

/** Counts are enforced here rather than on the poll: a choice poll needs at least two options to be a choice, a slider exactly one. */
export const ChoiceOptionUpdateSchema = z
  .array(ChoiceOptionSchema.extend({ id: optionalId }))
  .min(2, 'Min 2 options');

export const SliderOptionUpdateSchema = z
  .array(SliderOptionSchema.extend({ id: optionalId }))
  .length(1, 'A slider poll needs exactly 1 option');

/**
 * `PollOptionDTO` is a plain union with no discriminant field of its own, so
 * narrowing is structural: only the slider variant declares the end labels.
 */
export const isSliderOption = (
  option: PollOptionDTO,
): option is SliderOptionDTO => 'sliderLeftLabel' in option;

/** An option with its tally, as returned by a Prisma `_count` on the votes relation. */
export const OptionCountVoteSchema = OptionModelSchema.extend({
  _count: z.object({ voteOptions: z.number() }),
});

export type ChoiceOptionDTO = z.infer<typeof ChoiceOptionSchema>;
export type SliderOptionDTO = z.infer<typeof SliderOptionSchema>;
export type PollOptionDTO = ChoiceOptionDTO | SliderOptionDTO;

/** `[number]` because the update schemas are arrays: these name one element, not the list. */
export type ChoiceOptionUpdateDTO = z.infer<
  typeof ChoiceOptionUpdateSchema
>[number];
export type SliderOptionUpdateDTO = z.infer<
  typeof SliderOptionUpdateSchema
>[number];
export type PollOptionUpdateDTO = ChoiceOptionUpdateDTO | SliderOptionUpdateDTO;
