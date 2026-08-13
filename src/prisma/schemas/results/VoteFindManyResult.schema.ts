import * as z from 'zod';
export const VoteFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  label: z.string().optional(),
  createdById: z.number().int(),
  pollId: z.number().int(),
  poll: z.unknown(),
  voteOptions: z.array(z.unknown()),
  createdBy: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});