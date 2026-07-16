import * as z from 'zod';
export const PollHashtagUpdateResultSchema = z.nullable(z.object({
  pollId: z.number().int(),
  hashtagId: z.number().int(),
  poll: z.unknown(),
  hashtag: z.unknown()
}));