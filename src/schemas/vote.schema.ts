import { z } from 'zod';
import { VoteOptionSchema } from '../prisma/schemas/models/VoteOption.schema';

// this is temprary for now as I am waiting to see the implementation
const requiredVoteLabel = z
  .string()
  .min(1, 'Answer required')
  .max(255, 'Max 255 characters');

/**
 * same logic as PollCreation, we have a discrimated union on the type, but this time
 * it's on what the user "choses" or picks. So for multiple choice at least one
 * option has to be selected, free_field corresponds to the above requiredVoteLabel above.
 */
export const VoteCreationSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('multiple_choice'),
    optionVoted: z
      .array(VoteOptionSchema.pick({ optionId: true }))
      .min(1, 'Select at least one option'),
  }),
  z.object({
    type: z.literal('single_choice'),
    optionVoted: z
      .array(VoteOptionSchema.pick({ optionId: true }))
      .length(1, 'Select exactly one option'),
  }),
  z.object({
    type: z.literal('slider'),
    optionVoted: z
      .array(VoteOptionSchema.pick({ optionId: true }))
      .length(1, 'A slider vote targets exactly 1 option'),
    label: requiredVoteLabel,
  }),
]);

/**
 * Same shape as VoteCreationSchema but every field beyond the discriminant is optional,
 * so a caller can resubmit only what changed about their vote.
 */
export const VoteUpdateSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('multiple_choice'),
    optionVoted: z
      .array(VoteOptionSchema.pick({ optionId: true }))
      .min(1, 'Select at least one option')
      .optional(),
  }),
  z.object({
    type: z.literal('single_choice'),
    optionVoted: z
      .array(VoteOptionSchema.pick({ optionId: true }))
      .length(1, 'Select exactly one option')
      .optional(),
  }),
  z.object({
    type: z.literal('slider'),
    optionVoted: z
      .array(VoteOptionSchema.pick({ optionId: true }))
      .length(1, 'A slider vote targets exactly 1 option')
      .optional(),
    label: requiredVoteLabel.optional(),
  }),
]);

export type VoteCreationDTO = z.infer<typeof VoteCreationSchema>;
export type VoteUpdateDTO = z.infer<typeof VoteUpdateSchema>;

