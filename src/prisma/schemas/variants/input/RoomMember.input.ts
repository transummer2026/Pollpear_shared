import * as z from 'zod';
// prettier-ignore
export const RoomMemberInputSchema = z.object({
    joinedAt: z.date(),
    roomId: z.number().int(),
    userId: z.number().int(),
    room: z.unknown(),
    user: z.unknown()
}).strict();

export type RoomMemberInputType = z.infer<typeof RoomMemberInputSchema>;
