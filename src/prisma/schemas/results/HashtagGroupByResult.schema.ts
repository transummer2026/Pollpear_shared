import * as z from 'zod';
export const HashtagGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  name: z.string(),
  isVisible: z.boolean(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    isVisible: z.number(),
    pollHashtags: z.number(),
    reports: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable()
  }).nullable().optional()
}));