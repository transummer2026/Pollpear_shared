import * as z from "zod";
// prettier-ignore
export const VoteOptionResultSchema = z.object({
    voteId: z.number().int(),
    optionId: z.number().int(),
    vote: z.unknown(),
    option: z.unknown()
}).strict();

export type VoteOptionResultType = z.infer<typeof VoteOptionResultSchema>;
