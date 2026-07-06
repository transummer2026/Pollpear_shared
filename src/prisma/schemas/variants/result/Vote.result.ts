import * as z from "zod";
// prettier-ignore
export const VoteResultSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    label: z.string().nullable(),
    createdById: z.number().int(),
    createdBy: z.unknown(),
    voteOptions: z.array(z.unknown())
}).strict();

export type VoteResultType = z.infer<typeof VoteResultSchema>;
