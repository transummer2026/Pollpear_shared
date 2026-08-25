import * as z from 'zod';
export const FriendshipGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date(),
  userAId: z.number().int(),
  userBId: z.number().int(),
  addresseeId: z.number().int(),
  _count: z.object({
    id: z.number(),
    status: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    deletedAt: z.number(),
    userAId: z.number(),
    userBId: z.number(),
    addresseeId: z.number(),
    userA: z.number(),
    userB: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    userAId: z.number().nullable(),
    userBId: z.number().nullable(),
    addresseeId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    userAId: z.number().nullable(),
    userBId: z.number().nullable(),
    addresseeId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    userAId: z.number().int().nullable(),
    userBId: z.number().int().nullable(),
    addresseeId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    userAId: z.number().int().nullable(),
    userBId: z.number().int().nullable(),
    addresseeId: z.number().int().nullable()
  }).nullable().optional()
}));