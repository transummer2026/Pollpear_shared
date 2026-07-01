import * as z from 'zod';

export const HashtagSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  isVisible: z.boolean(),
});

export type HashtagType = z.infer<typeof HashtagSchema>;
