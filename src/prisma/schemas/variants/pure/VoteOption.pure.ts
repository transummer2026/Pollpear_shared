import * as z from "zod";
// prettier-ignore
export const VoteOptionModelSchema = z.object({
    voteId: z.number().int(),
    optionId: z.number().int(),
    vote: z.unknown(),
    option: z.unknown()
}).strict();

export type VoteOptionPureType = z.infer<typeof VoteOptionModelSchema>;
