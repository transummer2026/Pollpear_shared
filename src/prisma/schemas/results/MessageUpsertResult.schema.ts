import * as z from 'zod';
export const MessageUpsertResultSchema = z.object({
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
});