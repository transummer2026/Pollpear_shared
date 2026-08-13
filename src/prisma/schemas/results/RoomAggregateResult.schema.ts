import * as z from 'zod';
export const RoomAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    description: z.number(),
    bannerUrl: z.number(),
    publishedAt: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    deletedAt: z.number(),
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
    bannerUrl: z.string().nullable(),
    publishedAt: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    createdById: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    bannerUrl: z.string().nullable(),
    publishedAt: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    createdById: z.number().int().nullable()
  }).nullable().optional()});