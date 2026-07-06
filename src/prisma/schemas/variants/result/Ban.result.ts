import * as z from "zod";
// prettier-ignore
export const BanResultSchema = z.object({
    id: z.number().int(),
    banReason: z.string(),
    bannedAt: z.date(),
    unbannedAt: z.date(),
    unbanReason: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    userId: z.number().int(),
    bannedById: z.number().int(),
    unbannedById: z.number().int().nullable(),
    user: z.unknown(),
    bannedBy: z.unknown(),
    unbannedBy: z.unknown().nullable(),
    attachments: z.array(z.unknown())
}).strict();

export type BanResultType = z.infer<typeof BanResultSchema>;
