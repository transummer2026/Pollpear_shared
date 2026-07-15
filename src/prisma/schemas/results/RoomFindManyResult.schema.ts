import * as z from 'zod';
export const RoomFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  publishedAt: z.date().optional(),
  bannerUrl: z.string(),
  visibility: z.unknown(),
  status: z.unknown(),
  createdById: z.number().int(),
  createdBy: z.unknown(),
  polls: z.array(z.unknown()),
  messages: z.array(z.unknown()),
  invitations: z.array(z.unknown()),
  roomMembers: z.array(z.unknown()),
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