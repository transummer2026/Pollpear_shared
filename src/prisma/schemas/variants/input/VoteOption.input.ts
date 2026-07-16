import * as z from 'zod';
// prettier-ignore
export const VoteOptionInputSchema = z.object({
    voteId: z.number().int(),
    optionId: z.number().int(),
    vote: z.unknown(),
    option: z.unknown()
}).strict();

export type VoteOptionInputType = z.infer<typeof VoteOptionInputSchema>;
