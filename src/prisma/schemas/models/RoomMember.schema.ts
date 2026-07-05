import * as z from "zod";

export const RoomMemberSchema = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  joinedAt: z.date(),
  roomId: z.number().int(),
  userId: z.number().int(),
});

export type RoomMemberType = z.infer<typeof RoomMemberSchema>;
