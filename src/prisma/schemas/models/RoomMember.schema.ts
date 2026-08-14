import * as z from 'zod';

export const RoomMemberSchema = z.object({
  id: z.number().int(),
  joinedAt: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
  roomId: z.number().int(),
  userId: z.number().int(),
});

export type RoomMemberType = z.infer<typeof RoomMemberSchema>;
