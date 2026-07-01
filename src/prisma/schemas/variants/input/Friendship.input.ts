import * as z from 'zod';
import { FriendshipStatusSchema } from '../../enums/FriendshipStatus.schema';
// prettier-ignore
export const FriendshipInputSchema = z.object({
    status: FriendshipStatusSchema,
    requesterId: z.number().int(),
    addresseeId: z.number().int(),
    requester: z.unknown(),
    addressee: z.unknown()
}).strict();

export type FriendshipInputType = z.infer<typeof FriendshipInputSchema>;
