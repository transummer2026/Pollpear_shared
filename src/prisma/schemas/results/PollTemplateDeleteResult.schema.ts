import * as z from 'zod';
export const PollTemplateDeleteResultSchema = z.nullable(z.object({
  userId: z.number().int(),
  pollId: z.number().int(),
  user: z.unknown(),
  poll: z.unknown()
}));