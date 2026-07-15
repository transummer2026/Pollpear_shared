import * as z from 'zod';
export const RoomMemberAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    joinedAt: z.number(),
    roomId: z.number(),
    userId: z.number(),
    room: z.number(),
    user: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    roomId: z.number().nullable(),
    userId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    roomId: z.number().nullable(),
    userId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    joinedAt: z.date().nullable(),
    roomId: z.number().int().nullable(),
    userId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    joinedAt: z.date().nullable(),
    roomId: z.number().int().nullable(),
    userId: z.number().int().nullable()
  }).nullable().optional()});