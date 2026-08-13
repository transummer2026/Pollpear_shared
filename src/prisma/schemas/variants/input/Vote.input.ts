import * as z from 'zod';
// prettier-ignore
export const VoteInputSchema = z.object({
    id: z.number().int(),
    freeField: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable(),
    createdById: z.number().int(),
    pollId: z.number().int(),
    poll: z.unknown(),
    createdBy: z.unknown(),
    voteOptions: z.array(z.unknown())
}).strict();

export type VoteInputType = z.infer<typeof VoteInputSchema>;
