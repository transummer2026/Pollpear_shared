import * as z from 'zod';
export const InvitationUpsertResultSchema = z.object({
  id: z.number().int(),
  status: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  label: z.string().optional(),
  roomId: z.number().int(),
  inviterId: z.number().int(),
  inviteeId: z.number().int(),
  room: z.unknown(),
  inviter: z.unknown(),
  invitee: z.unknown()
});