import * as z from 'zod';
export const VoteFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  label: z.string().optional(),
  createdById: z.number().int(),
  createdBy: z.unknown(),
  voteOptions: z.array(z.unknown())
}));