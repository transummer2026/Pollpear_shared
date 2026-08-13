import * as z from 'zod';
export const VoteAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    freeField: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    deletedAt: z.number(),
    createdById: z.number(),
    pollId: z.number(),
    poll: z.number(),
    createdBy: z.number(),
    voteOptions: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    createdById: z.number().nullable(),
    pollId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    createdById: z.number().nullable(),
    pollId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    freeField: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    createdById: z.number().int().nullable(),
    pollId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    freeField: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    createdById: z.number().int().nullable(),
    pollId: z.number().int().nullable()
  }).nullable().optional()});