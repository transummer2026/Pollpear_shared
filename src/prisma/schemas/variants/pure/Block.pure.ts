import * as z from 'zod';
// prettier-ignore
export const BlockModelSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    blockerId: z.number().int(),
    blockedId: z.number().int(),
    blocker: z.unknown(),
    blocked: z.unknown()
}).strict();

export type BlockPureType = z.infer<typeof BlockModelSchema>;
