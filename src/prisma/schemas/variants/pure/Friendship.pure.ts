import * as z from 'zod';
import { FriendshipStatusSchema } from '../../enums/FriendshipStatus.schema';
// prettier-ignore
export const FriendshipModelSchema = z.object({
    id: z.number().int(),
    status: FriendshipStatusSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    userAId: z.number().int(),
    userBId: z.number().int(),
    addresseeId: z.number().int(),
    userA: z.unknown(),
    userB: z.unknown()
}).strict();

export type FriendshipPureType = z.infer<typeof FriendshipModelSchema>;
