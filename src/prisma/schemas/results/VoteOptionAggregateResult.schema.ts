import * as z from 'zod';
export const VoteOptionAggregateResultSchema = z.object({  _count: z.object({
    voteId: z.number(),
    optionId: z.number(),
    vote: z.number(),
    option: z.number()
  }).optional(),
  _sum: z.object({
    voteId: z.number().nullable(),
    optionId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    voteId: z.number().nullable(),
    optionId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    voteId: z.number().int().nullable(),
    optionId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    voteId: z.number().int().nullable(),
    optionId: z.number().int().nullable()
  }).nullable().optional()});