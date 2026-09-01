import * as z from 'zod';
export const MessageCreateResultSchema = z.object({
  id: z.number().int(),
  content: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  authorId: z.number().int(),
  roomId: z.number().int(),
  author: z.unknown(),
  room: z.unknown()
});