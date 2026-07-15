import * as z from 'zod';
// prettier-ignore
export const BanInputSchema = z.object({
    id: z.number().int(),
    banReason: z.string(),
    bannedAt: z.date(),
    unbannedAt: z.date(),
    unbanReason: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    userId: z.number().int(),
    bannedById: z.number().int(),
    unbannedById: z.number().int().optional().nullable(),
    user: z.unknown(),
    bannedBy: z.unknown(),
    unbannedBy: z.unknown().optional().nullable(),
    attachments: z.array(z.unknown())
}).strict();

export type BanInputType = z.infer<typeof BanInputSchema>;
