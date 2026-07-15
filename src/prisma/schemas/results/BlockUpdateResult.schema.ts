import * as z from 'zod';
export const BlockUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  blockerId: z.number().int(),
  blockedId: z.number().int(),
  blocker: z.unknown(),
  blocked: z.unknown()
}));