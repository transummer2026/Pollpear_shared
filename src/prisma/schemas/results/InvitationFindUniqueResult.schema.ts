import * as z from 'zod';
export const InvitationFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  status: z.unknown(),
  message: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  roomId: z.number().int(),
  inviterId: z.number().int(),
  inviteeId: z.number().int(),
  room: z.unknown(),
  inviter: z.unknown(),
  invitee: z.unknown()
}));