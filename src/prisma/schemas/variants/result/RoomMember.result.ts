import * as z from 'zod';
// prettier-ignore
export const RoomMemberResultSchema = z.object({
    id: z.number().int(),
    joinedAt: z.date(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    roomId: z.number().int(),
    userId: z.number().int(),
    room: z.unknown(),
    user: z.unknown()
}).strict();

export type RoomMemberResultType = z.infer<typeof RoomMemberResultSchema>;
