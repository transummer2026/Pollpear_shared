import * as z from 'zod';
export const PollTemplateGroupByResultSchema = z.array(z.object({
  userId: z.number().int(),
  pollId: z.number().int(),
  _count: z.object({
    userId: z.number(),
    pollId: z.number(),
    user: z.number(),
    poll: z.number()
  }).optional(),
  _sum: z.object({
    userId: z.number().nullable(),
    pollId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    userId: z.number().nullable(),
    pollId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    userId: z.number().int().nullable(),
    pollId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    userId: z.number().int().nullable(),
    pollId: z.number().int().nullable()
  }).nullable().optional()
}));