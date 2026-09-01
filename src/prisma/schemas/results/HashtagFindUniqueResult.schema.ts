import * as z from 'zod';
export const HashtagFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  pollHashtags: z.array(z.unknown())
}));