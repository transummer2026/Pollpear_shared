import * as z from 'zod';
export const HashtagUpsertResultSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  isVisible: z.boolean(),
  pollHashtags: z.array(z.unknown()),
  reports: z.array(z.unknown())
});