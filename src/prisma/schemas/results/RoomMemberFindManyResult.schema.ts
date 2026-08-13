import * as z from 'zod';
export const RoomMemberFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  joinedAt: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  roomId: z.number().int(),
  userId: z.number().int(),
  room: z.unknown(),
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