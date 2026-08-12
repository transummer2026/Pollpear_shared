import * as z from 'zod';
export const ApiKeyFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  keyHash: z.string(),
  appName: z.string(),
  revoked: z.boolean(),
  expiresAt: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
  ownerId: z.number().int(),
  user: z.unknown()
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