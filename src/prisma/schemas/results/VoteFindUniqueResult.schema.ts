import * as z from 'zod';
export const VoteFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  freeField: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  createdById: z.number().int(),
  pollId: z.number().int(),
  poll: z.unknown(),
  createdBy: z.unknown(),
  voteOptions: z.array(z.unknown())
}));