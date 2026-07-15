import * as z from 'zod';
export const BlockGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  blockerId: z.number().int(),
  blockedId: z.number().int(),
  _count: z.object({
    id: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    blockerId: z.number(),
    blockedId: z.number(),
    blocker: z.number(),
    blocked: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    blockerId: z.number().nullable(),
    blockedId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    blockerId: z.number().nullable(),
    blockedId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    blockerId: z.number().int().nullable(),
    blockedId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    blockerId: z.number().int().nullable(),
    blockedId: z.number().int().nullable()
  }).nullable().optional()
}));