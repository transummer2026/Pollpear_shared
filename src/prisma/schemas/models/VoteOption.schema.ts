import * as z from 'zod';

export const VoteOptionSchema = z.object({
  voteId: z.number().int(),
  optionId: z.number().int(),
});

export type VoteOptionType = z.infer<typeof VoteOptionSchema>;
