import * as z from 'zod';
export const MessageAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    content: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    deletedAt: z.number(),
    authorId: z.number(),
    roomId: z.number(),
    author: z.number(),
    room: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    authorId: z.number().nullable(),
    roomId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    authorId: z.number().nullable(),
    roomId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    content: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    authorId: z.number().int().nullable(),
    roomId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    content: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    authorId: z.number().int().nullable(),
    roomId: z.number().int().nullable()
  }).nullable().optional()});