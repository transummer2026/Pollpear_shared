import * as z from 'zod';
export const NotificationFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  type: z.unknown(),
  content: z.string(),
  isRead: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.number().int(),
  user: z.unknown(),
  actorId: z.number().int().optional()
}));