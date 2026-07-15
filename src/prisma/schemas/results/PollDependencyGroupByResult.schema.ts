import * as z from 'zod';
export const PollDependencyGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  childPollId: z.number().int(),
  optionId: z.number().int(),
  _count: z.object({
    id: z.number(),
    childPollId: z.number(),
    optionId: z.number(),
    childPoll: z.number(),
    option: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    childPollId: z.number().nullable(),
    optionId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    childPollId: z.number().nullable(),
    optionId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    childPollId: z.number().int().nullable(),
    optionId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    childPollId: z.number().int().nullable(),
    optionId: z.number().int().nullable()
  }).nullable().optional()
}));