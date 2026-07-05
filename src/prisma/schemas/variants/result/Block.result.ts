import * as z from "zod";
// prettier-ignore
export const BlockResultSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    blockerId: z.number().int(),
    blockedId: z.number().int(),
    blocker: z.unknown(),
    blocked: z.unknown()
}).strict();

export type BlockResultType = z.infer<typeof BlockResultSchema>;
