import * as z from 'zod';
export const InvitationAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    status: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    label: z.number(),
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
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    label: z.string().nullable(),
    roomId: z.number().int().nullable(),
    inviterId: z.number().int().nullable(),
    inviteeId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    label: z.string().nullable(),
    roomId: z.number().int().nullable(),
    inviterId: z.number().int().nullable(),
    inviteeId: z.number().int().nullable()
  }).nullable().optional()});