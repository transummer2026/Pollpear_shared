import * as z from 'zod';
export const BanGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  banReason: z.string(),
  bannedAt: z.date(),
  unbannedAt: z.date(),
  unbanReason: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.number().int(),
  bannedById: z.number().int(),
  unbannedById: z.number().int(),
  _count: z.object({
    id: z.number(),
    banReason: z.number(),
    bannedAt: z.number(),
    unbannedAt: z.number(),
    unbanReason: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    userId: z.number(),
    bannedById: z.number(),
    unbannedById: z.number(),
    user: z.number(),
    bannedBy: z.number(),
    unbannedBy: z.number(),
    attachments: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    userId: z.number().nullable(),
    bannedById: z.number().nullable(),
    unbannedById: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    userId: z.number().nullable(),
    bannedById: z.number().nullable(),
    unbannedById: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    banReason: z.string().nullable(),
    bannedAt: z.date().nullable(),
    unbannedAt: z.date().nullable(),
    unbanReason: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    userId: z.number().int().nullable(),
    bannedById: z.number().int().nullable(),
    unbannedById: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    banReason: z.string().nullable(),
    bannedAt: z.date().nullable(),
    unbannedAt: z.date().nullable(),
    unbanReason: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    userId: z.number().int().nullable(),
    bannedById: z.number().int().nullable(),
    unbannedById: z.number().int().nullable()
  }).nullable().optional()
}));