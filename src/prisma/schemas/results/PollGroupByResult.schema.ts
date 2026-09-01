import * as z from 'zod';
export const PollGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string(),
  allowChangeVote: z.boolean(),
  isAnonymous: z.boolean(),
  publishedAt: z.date(),
  endsAt: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date(),
  createdById: z.number().int(),
  roomId: z.number().int(),
  _count: z.object({
    id: z.number(),
    title: z.number(),
    description: z.number(),
    type: z.number(),
    visibility: z.number(),
    allowChangeVote: z.number(),
    isAnonymous: z.number(),
    status: z.number(),
    publishedAt: z.number(),
    endsAt: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    deletedAt: z.number(),
    createdById: z.number(),
    roomId: z.number(),
    createdBy: z.number(),
    room: z.number(),
    votes: z.number(),
    options: z.number(),
    pollHashtags: z.number()
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
    publishedAt: z.date().nullable(),
    endsAt: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    createdById: z.number().int().nullable(),
    roomId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    publishedAt: z.date().nullable(),
    endsAt: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    createdById: z.number().int().nullable(),
    roomId: z.number().int().nullable()
  }).nullable().optional()
}));