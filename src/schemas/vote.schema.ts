import { z } from 'zod';
import { VoteSchema as VoteModelSchema } from '../prisma/schemas/models/Vote.schema';
import { unwrapNullish } from './utils';
import { VoteOptionSchema } from './vote-option.schema';

const requiredFreeField = unwrapNullish(VoteModelSchema.shape.freeField)
  .min(1, 'Answer required')
  .max(255, 'Max 255 characters');

/**
 * same logic as PollCreateSchema, we have a discrimated union on the type, but this time
 * it's on what the user "choses" or picks. So for multiple choice at least one
 * option has to be selected, free_field corresponds to the above requiredFreeField above.
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
    freeField: requiredFreeField,
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
    freeField: requiredFreeField.optional(),
  }),
]);

export type VoteCreateDTO = z.infer<typeof VoteCreateSchema>;
export type VoteUpdateDTO = z.infer<typeof VoteUpdateSchema>;
