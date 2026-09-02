import * as z from 'zod';
export const OptionUpdateResultSchema = z.nullable(z.object({
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
}));