import * as z from 'zod';
export const ApiKeyGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  keyHash: z.string(),
  appName: z.string(),
  revoked: z.boolean(),
  expiredAt: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
  ownerId: z.number().int(),
  _count: z.object({
    id: z.number(),
    keyHash: z.number(),
    appName: z.number(),
    revoked: z.number(),
    expiredAt: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    ownerId: z.number(),
    user: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    ownerId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    ownerId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    keyHash: z.string().nullable(),
    appName: z.string().nullable(),
    expiredAt: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    ownerId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    keyHash: z.string().nullable(),
    appName: z.string().nullable(),
    expiredAt: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    ownerId: z.number().int().nullable()
  }).nullable().optional()
}));