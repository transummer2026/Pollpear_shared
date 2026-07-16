import * as z from 'zod';
export const HashtagDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  isVisible: z.boolean(),
  pollHashtags: z.array(z.unknown()),
  reports: z.array(z.unknown())
}));