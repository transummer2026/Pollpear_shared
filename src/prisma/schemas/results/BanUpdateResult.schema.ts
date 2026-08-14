import * as z from 'zod';
export const BanUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  banReason: z.string(),
  unbanReason: z.string().optional(),
  startedAt: z.date(),
  endedAt: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.number().int(),
  bannedById: z.number().int(),
  unbannedById: z.number().int().optional(),
  user: z.unknown(),
  bannedBy: z.unknown(),
  unbannedBy: z.unknown().optional(),
  attachments: z.array(z.unknown())
}));