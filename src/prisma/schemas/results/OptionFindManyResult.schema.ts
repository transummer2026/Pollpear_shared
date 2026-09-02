import * as z from 'zod';
export const OptionFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  text: z.string(),
  sliderLeftLabel: z.string().optional(),
  sliderRightLabel: z.string().optional(),
  order: z.number().int(),
  deletedAt: z.date().optional(),
  pollId: z.number().int(),
  poll: z.unknown(),
  voteOptions: z.array(z.unknown()),
  pollDependencies: z.array(z.unknown()),
  reports: z.array(z.unknown())
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