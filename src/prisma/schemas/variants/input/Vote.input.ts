import * as z from 'zod';
// prettier-ignore
export const VoteInputSchema = z.object({
    label: z.string().optional().nullable(),
    createdById: z.number().int(),
    createdBy: z.unknown(),
    voteOptions: z.array(z.unknown())
}).strict();

export type VoteInputType = z.infer<typeof VoteInputSchema>;
