import * as z from 'zod';
export const RoomMemberFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  joinedAt: z.date(),
  roomId: z.number().int(),
  userId: z.number().int(),
  room: z.unknown(),
  user: z.unknown()
}));