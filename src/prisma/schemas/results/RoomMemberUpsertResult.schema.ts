import * as z from 'zod';
export const RoomMemberUpsertResultSchema = z.object({
  id: z.number().int(),
  joinedAt: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  roomId: z.number().int(),
  userId: z.number().int(),
  room: z.unknown(),
  user: z.unknown()
});