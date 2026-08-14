import * as z from 'zod';

export const HashtagSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
});

export type HashtagType = z.infer<typeof HashtagSchema>;
