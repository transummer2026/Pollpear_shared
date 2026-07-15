import * as z from 'zod';
export const MessageFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  content: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  authorId: z.number().int(),
  roomId: z.number().int(),
  author: z.unknown(),
  room: z.unknown(),
  reports: z.array(z.unknown())
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