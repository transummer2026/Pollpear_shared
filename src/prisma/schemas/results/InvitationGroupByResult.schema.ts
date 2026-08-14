import * as z from 'zod';
export const InvitationGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  message: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date(),
  roomId: z.number().int(),
  inviterId: z.number().int(),
  inviteeId: z.number().int(),
  _count: z.object({
    id: z.number(),
    status: z.number(),
    message: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    deletedAt: z.number(),
    roomId: z.number(),
    inviterId: z.number(),
    inviteeId: z.number(),
    room: z.number(),
    inviter: z.number(),
    invitee: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    roomId: z.number().nullable(),
    inviterId: z.number().nullable(),
    inviteeId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    roomId: z.number().nullable(),
    inviterId: z.number().nullable(),
    inviteeId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    message: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    roomId: z.number().int().nullable(),
    inviterId: z.number().int().nullable(),
    inviteeId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    message: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    roomId: z.number().int().nullable(),
    inviterId: z.number().int().nullable(),
    inviteeId: z.number().int().nullable()
  }).nullable().optional()
}));