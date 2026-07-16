import * as z from 'zod';
export const VoteOptionUpsertResultSchema = z.object({
  voteId: z.number().int(),
  optionId: z.number().int(),
  vote: z.unknown(),
  option: z.unknown()
});