import * as z from 'zod';
export const PollHashtagAggregateResultSchema = z.object({  _count: z.object({
    pollId: z.number(),
    hashtagId: z.number(),
    poll: z.number(),
    hashtag: z.number()
  }).optional(),
  _sum: z.object({
    pollId: z.number().nullable(),
    hashtagId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    pollId: z.number().nullable(),
    hashtagId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    pollId: z.number().int().nullable(),
    hashtagId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    pollId: z.number().int().nullable(),
    hashtagId: z.number().int().nullable()
  }).nullable().optional()});