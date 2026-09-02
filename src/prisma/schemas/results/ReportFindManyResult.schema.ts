import * as z from 'zod';
export const ReportFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  reason: z.unknown(),
  content: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  reporterId: z.number().int(),
  reportedId: z.number().int(),
  roomId: z.number().int().optional(),
  messageId: z.number().int().optional(),
  pollId: z.number().int().optional(),
  optionId: z.number().int().optional(),
  hashtagId: z.number().int().optional(),
  reporter: z.unknown(),
  reported: z.unknown(),
  room: z.unknown().optional(),
  message: z.unknown().optional(),
  poll: z.unknown().optional(),
  option: z.unknown().optional(),
  hashtag: z.unknown().optional()
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