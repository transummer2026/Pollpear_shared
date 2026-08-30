import { z } from 'zod';
import { VoteOptionSchema } from './vote-option.schema';

/**
 * A slider vote reuses the `freeField` string column (there is no numeric
 * column on `Vote`, and the field was meant to also serve a not-yet-built
 * freefield vote type). But the results endpoint sums these values with
 * `Number(freeField)`, so a non-numeric payload like `"banana"` would make
 * the average `NaN` and blow up `PollReadSchema.parse` on every read of the
 * poll. Constrain it here: an integer 0-100, stored back as its canonical
 * string form.
 */
const sliderFreeField = z
  .string()
  .trim()
  .regex(/^\d+$/, 'Slider value must be an integer between 0 and 100')
  .transform((value) => Number(value))
  .pipe(
    z
      .number()
      .min(0, 'Slider value must be at least 0')
      .max(100, 'Slider value must be at most 100'),
  )
  .transform((value) => String(value));

/**
 * same logic as PollCreateSchema, we have a discrimated union on the type, but this time
 * it's on what the user "choses" or picks. So for multiple choice at least one
 * option has to be selected; a slider vote carries its value in `freeField`
 * (see `sliderFreeField` above).
 */
export const VoteCreateSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('multiple_choice'),
    optionsVoted: z
      .array(VoteOptionSchema.pick({ optionId: true }))
      .min(1, 'Select at least one option'),
  }),
  z.object({
    type: z.literal('single_choice'),
    optionsVoted: z
      .array(VoteOptionSchema.pick({ optionId: true }))
      .length(1, 'Select exactly one option'),
  }),
  z.object({
    type: z.literal('slider'),
    optionsVoted: z
      .array(VoteOptionSchema.pick({ optionId: true }))
      .length(1, 'A slider vote targets exactly 1 option'),
    freeField: sliderFreeField,
  }),
]);

/**
 * Same shape as VoteCreateSchema but every field beyond the discriminant is optional,
 * so a caller can resubmit only what changed about their vote.
 */
export const VoteUpdateSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('multiple_choice'),
    optionsVoted: z
      .array(VoteOptionSchema.pick({ optionId: true }))
      .min(1, 'Select at least one option')
      .optional(),
  }),
  z.object({
    type: z.literal('single_choice'),
    optionsVoted: z
      .array(VoteOptionSchema.pick({ optionId: true }))
      .length(1, 'Select exactly one option')
      .optional(),
  }),
  z.object({
    type: z.literal('slider'),
    optionsVoted: z
      .array(VoteOptionSchema.pick({ optionId: true }))
      .length(1, 'A slider vote targets exactly 1 option')
      .optional(),
    freeField: sliderFreeField.optional(),
  }),
]);

export type VoteCreateDTO = z.infer<typeof VoteCreateSchema>;
export type VoteUpdateDTO = z.infer<typeof VoteUpdateSchema>;
