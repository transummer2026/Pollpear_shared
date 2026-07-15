import * as z from 'zod';
export const PollHashtagCreateResultSchema = z.object({
  pollId: z.number().int(),
  hashtagId: z.number().int(),
  poll: z.unknown(),
  hashtag: z.unknown()
});