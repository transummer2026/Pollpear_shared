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
 * Same idea as PollCreateSchema, but discriminating on what the voter submits
 * rather than on how the poll was built: a single-choice ballot carries
 * exactly one option, multiple choice at least one, and a slider targets its
 * single option and carries the value in `freeField` (see `sliderFreeField`
 * above).
 *
 * `type` is not stored on the vote - it is only here to select the rule, and
 * the caller is expected to echo back the type of the poll being voted on.
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
 * so a caller can resubmit only what changed about their vote. Where a field
 * is present the count rules still apply, which is why they are repeated
 * rather than the whole union being run through `.partial()` - `.partial()`
 * would also make `type` optional and leave nothing to discriminate on.
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
