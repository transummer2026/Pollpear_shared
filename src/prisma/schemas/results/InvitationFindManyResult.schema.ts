import * as z from 'zod';
export const InvitationFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});