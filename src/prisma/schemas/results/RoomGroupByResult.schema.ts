import * as z from 'zod';
export const RoomGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  publishedAt: z.date(),
  bannerUrl: z.string(),
  createdById: z.number().int(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    description: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    publishedAt: z.number(),
    bannerUrl: z.number(),
    visibility: z.number(),
    status: z.number(),
    createdById: z.number(),
    createdBy: z.number(),
    polls: z.number(),
    messages: z.number(),
    invitations: z.number(),
    roomMembers: z.number(),
    reports: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    createdById: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    createdById: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    publishedAt: z.date().nullable(),
    bannerUrl: z.string().nullable(),
    createdById: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    publishedAt: z.date().nullable(),
    bannerUrl: z.string().nullable(),
    createdById: z.number().int().nullable()
  }).nullable().optional()
}));