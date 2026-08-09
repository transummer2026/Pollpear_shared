import { z } from 'zod';
import { OptionSchema } from '../prisma/schemas/models/Option.schema';

const OptionBaseSchema = OptionSchema.omit({
  isDeleted: true,
  pollId: true,
  label: true,
  sliderLeftLabel: true,
  sliderRightLabel: true,
});

const requiredLabel = OptionSchema.shape.label
  .min(1, 'Label required')
  .max(255, 'Max 255 characters');

const emptyToUndefined = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess((val) => (val === '' ? undefined : val), schema.optional());

const sliderLabel = emptyToUndefined(z.string().max(255, 'Max 255 characters'));

export const MultipleChoiceOptionInputSchema = OptionBaseSchema.extend({
  label: requiredLabel,
});

export const SliderOptionInputSchema = OptionBaseSchema.extend({
  label: requiredLabel,
  sliderLeftLabel: sliderLabel,
  sliderRightLabel: sliderLabel,
});

export type MultipleChoiceOptionInput = z.infer<
  typeof MultipleChoiceOptionInputSchema
>;
export type SliderOptionInput = z.infer<typeof SliderOptionInputSchema>;
export type PollOptionInput = MultipleChoiceOptionInput | SliderOptionInput;

export const isSliderOption = (
  option: PollOptionInput,
): option is SliderOptionInput => 'sliderLeftLabel' in option;
