import * as z from 'zod';
// prettier-ignore
export const VoteResultSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    label: z.string().nullable(),
    createdById: z.number().int(),
    pollId: z.number().int(),
    poll: z.unknown(),
    voteOptions: z.array(z.unknown()),
    createdBy: z.unknown()
}).strict();

export type VoteResultType = z.infer<typeof VoteResultSchema>;
