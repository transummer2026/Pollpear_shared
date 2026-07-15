import * as z from 'zod';
export const PollGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string(),
  createdAt: z.date(),
  publishedAt: z.date(),
  updatedAt: z.date(),
  endsAt: z.date(),
  allowChangeVote: z.boolean(),
  isAnonymous: z.boolean(),
  createdById: z.number().int(),
  roomId: z.number().int(),
  _count: z.object({
    id: z.number(),
    title: z.number(),
    description: z.number(),
    type: z.number(),
    createdAt: z.number(),
    publishedAt: z.number(),
    updatedAt: z.number(),
    endsAt: z.number(),
    visibility: z.number(),
    allowChangeVote: z.number(),
    isAnonymous: z.number(),
    status: z.number(),
    createdById: z.number(),
    roomId: z.number(),
    createdBy: z.number(),
    room: z.number(),
    options: z.number(),
    pollHashtags: z.number(),
    pollTemplates: z.number(),
    reports: z.number(),
    childDependencies: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    createdById: z.number().nullable(),
    roomId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    createdById: z.number().nullable(),
    roomId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    publishedAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    endsAt: z.date().nullable(),
    createdById: z.number().int().nullable(),
    roomId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    publishedAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    endsAt: z.date().nullable(),
    createdById: z.number().int().nullable(),
    roomId: z.number().int().nullable()
  }).nullable().optional()
}));