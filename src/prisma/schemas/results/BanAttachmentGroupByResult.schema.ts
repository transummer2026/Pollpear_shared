import * as z from 'zod';
export const BanAttachmentGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  attachmentUrl: z.string(),
  banId: z.number().int(),
  _count: z.object({
    id: z.number(),
    attachmentUrl: z.number(),
    banId: z.number(),
    ban: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    banId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    banId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    attachmentUrl: z.string().nullable(),
    banId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    attachmentUrl: z.string().nullable(),
    banId: z.number().int().nullable()
  }).nullable().optional()
}));