import * as z from 'zod';
export const FriendshipFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  status: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  requesterId: z.number().int(),
  addresseeId: z.number().int(),
  requester: z.unknown(),
  addressee: z.unknown()
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