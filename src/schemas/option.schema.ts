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

export const OptionUpdateSchema = z
  .array(
    z.union([
      ChoiceOptionSchema.extend({ id: optionalId }),
      SliderOptionSchema.extend({ id: optionalId }),
    ]),
  )
  .min(2, 'Min 2 options');

export const isSliderOption = (
  option: PollOptionDTO,
): option is SliderOptionDTO => 'sliderLeftLabel' in option;

export type ChoiceOptionDTO = z.infer<typeof ChoiceOptionSchema>;
export type SliderOptionDTO = z.infer<typeof SliderOptionSchema>;
export type PollOptionDTO = ChoiceOptionDTO | SliderOptionDTO;
