import * as z from 'zod';
export const BanFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  banReason: z.string(),
  bannedAt: z.date(),
  unbannedAt: z.date(),
  unbanReason: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.number().int(),
  bannedById: z.number().int(),
  unbannedById: z.number().int().optional(),
  user: z.unknown(),
  bannedBy: z.unknown(),
  unbannedBy: z.unknown().optional(),
  attachments: z.array(z.unknown())
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});