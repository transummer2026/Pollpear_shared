import * as z from 'zod';
export const VoteOptionFindUniqueResultSchema = z.nullable(z.object({
  voteId: z.number().int(),
  optionId: z.number().int(),
  vote: z.unknown(),
  option: z.unknown()
}));