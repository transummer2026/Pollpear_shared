import * as z from 'zod';
export const PollDependencyAggregateResultSchema = z.object({  _count: z.object({
    childPollId: z.number(),
    optionId: z.number(),
    childPoll: z.number(),
    option: z.number()
  }).optional(),
  _sum: z.object({
    childPollId: z.number().nullable(),
    optionId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    childPollId: z.number().nullable(),
    optionId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    childPollId: z.number().int().nullable(),
    optionId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    childPollId: z.number().int().nullable(),
    optionId: z.number().int().nullable()
  }).nullable().optional()});