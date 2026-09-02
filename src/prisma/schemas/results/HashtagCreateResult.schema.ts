import * as z from 'zod';
export const HashtagCreateResultSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  pollHashtags: z.array(z.unknown()),
  reports: z.array(z.unknown())
});