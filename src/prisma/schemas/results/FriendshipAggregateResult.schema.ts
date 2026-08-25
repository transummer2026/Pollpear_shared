import * as z from 'zod';
export const FriendshipAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    status: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    deletedAt: z.number(),
    requesterId: z.number(),
    addresseeId: z.number(),
    requester: z.number(),
    addressee: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    requesterId: z.number().nullable(),
    addresseeId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    requesterId: z.number().nullable(),
    addresseeId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    requesterId: z.number().int().nullable(),
    addresseeId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    requesterId: z.number().int().nullable(),
    addresseeId: z.number().int().nullable()
  }).nullable().optional()});