import * as z from 'zod';
// prettier-ignore
export const VoteResultSchema = z.object({
    id: z.number().int(),
    freeField: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    createdById: z.number().int(),
    pollId: z.number().int(),
    poll: z.unknown(),
    createdBy: z.unknown(),
    voteOptions: z.array(z.unknown())
}).strict();

export type VoteResultType = z.infer<typeof VoteResultSchema>;
