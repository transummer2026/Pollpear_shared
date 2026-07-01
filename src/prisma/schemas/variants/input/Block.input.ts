import * as z from 'zod';
// prettier-ignore
export const BlockInputSchema = z.object({
    blockerId: z.number().int(),
    blockedId: z.number().int(),
    blocker: z.unknown(),
    blocked: z.unknown()
}).strict();

export type BlockInputType = z.infer<typeof BlockInputSchema>;
