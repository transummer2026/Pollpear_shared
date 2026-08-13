import * as z from 'zod';
export const OptionAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    text: z.number(),
    sliderLeftLabel: z.number(),
    sliderRightLabel: z.number(),
    order: z.number(),
    deletedAt: z.number(),
    pollId: z.number(),
    poll: z.number(),
    voteOptions: z.number(),
    pollDependencies: z.number(),
    reports: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    order: z.number().nullable(),
    pollId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    order: z.number().nullable(),
    pollId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    text: z.string().nullable(),
    sliderLeftLabel: z.string().nullable(),
    sliderRightLabel: z.string().nullable(),
    order: z.number().int().nullable(),
    deletedAt: z.date().nullable(),
    pollId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    text: z.string().nullable(),
    sliderLeftLabel: z.string().nullable(),
    sliderRightLabel: z.string().nullable(),
    order: z.number().int().nullable(),
    deletedAt: z.date().nullable(),
    pollId: z.number().int().nullable()
  }).nullable().optional()});