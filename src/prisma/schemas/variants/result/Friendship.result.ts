import * as z from 'zod';
import { FriendshipStatusSchema } from '../../enums/FriendshipStatus.schema';
// prettier-ignore
export const FriendshipResultSchema = z.object({
    id: z.number().int(),
    status: FriendshipStatusSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    requesterId: z.number().int(),
    addresseeId: z.number().int(),
    requester: z.unknown(),
    addressee: z.unknown()
}).strict();

export type FriendshipResultType = z.infer<typeof FriendshipResultSchema>;
