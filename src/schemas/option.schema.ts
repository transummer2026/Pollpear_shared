import { z } from 'zod';
import { OptionSchema as OptionModelSchema } from '../prisma/schemas/models/Option.schema';
import { unwrapNullish } from './utils';

export { OptionModelSchema };
export type OptionDTO = z.infer<typeof OptionModelSchema>;

const requiredText = OptionModelSchema.shape.text
  .min(1, 'Label required')
  .max(255, 'Max 255 characters');

const emptyToUndefined = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess((val) => (val === '' ? undefined : val), schema.nullish());

const sliderLabel = emptyToUndefined(
  unwrapNullish(OptionModelSchema.shape.sliderLeftLabel).max(
    255,
    'Max 255 characters',
  ),
);

const optionalId = OptionModelSchema.shape.id.optional();

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

export const ChoiceOptionUpdateSchema = z
  .array(ChoiceOptionSchema.extend({ id: optionalId }))
  .min(2, 'Min 2 options');

export const SliderOptionUpdateSchema = z
  .array(SliderOptionSchema.extend({ id: optionalId }))
  .length(1, 'A slider poll needs exactly 1 option');

export const isSliderOption = (
  option: PollOptionDTO,
): option is SliderOptionDTO => 'sliderLeftLabel' in option;

export const OptionCountVoteSchema = OptionModelSchema.extend({
  _count: z.object({ voteOptions: z.number() }),
});

export type ChoiceOptionDTO = z.infer<typeof ChoiceOptionSchema>;
export type SliderOptionDTO = z.infer<typeof SliderOptionSchema>;
export type PollOptionDTO = ChoiceOptionDTO | SliderOptionDTO;

export type ChoiceOptionUpdateDTO = z.infer<
  typeof ChoiceOptionUpdateSchema
>[number];
export type SliderOptionUpdateDTO = z.infer<
  typeof SliderOptionUpdateSchema
>[number];
export type PollOptionUpdateDTO = ChoiceOptionUpdateDTO | SliderOptionUpdateDTO;
