import * as z from 'zod';
export const NotificationGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  content: z.string(),
  isRead: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.number().int(),
  _count: z.object({
    id: z.number(),
    type: z.number(),
    content: z.number(),
    isRead: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    userId: z.number(),
    user: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    userId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    userId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    content: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    userId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    content: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    userId: z.number().int().nullable()
  }).nullable().optional()
}));