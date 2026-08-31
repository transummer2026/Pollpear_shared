import { z } from 'zod';
import { FriendshipSchema as FriendshipModelSchema } from '../prisma/schemas/models/Friendship.schema';
import { UserSchema as UserModelSchema } from '../prisma/schemas/models/User.schema';

const FriendshipBaseSchema = FriendshipModelSchema.omit({
  deletedAt: true,
});

/**
 * A friendship is stored once per pair, not once per direction: the two ids
 * are written in a canonical order behind `@@unique([userAId, userBId])`, so
 * A-then-B and B-then-A cannot both exist and "are these two friends?" is a
 * single lookup.
 *
 * The cost is that the column order no longer says who asked. `addresseeId`
 * records who received the request, which makes the requester simply the other
 * half of the pair - derived here, once, so no consumer has to rediscover the
 * convention.
 */
export const FriendshipSchema = FriendshipBaseSchema.transform(
  (friendship) => ({
    ...friendship,
    requesterId:
      friendship.addresseeId === friendship.userAId
        ? friendship.userBId
        : friendship.userAId,
  }),
);

export const FriendshipStatusSchema = FriendshipBaseSchema.shape.status;

/**
 * Answering a friend request. `pending` is excluded because that is the state
 * the row starts in: an answer can only move it away from there.
 */
export const FriendshipStatusUpdateSchema = z.object({
  status: FriendshipStatusSchema.exclude(['pending']),
});

/** Just enough to render a friend row, plus `isOnline` for the presence dot. */
export const FriendUserSchema = UserModelSchema.pick({
  id: true,
  username: true,
  avatarUrl: true,
  isOnline: true,
});

/**
 * One entry in a friend list, flattened around the *other* user: the list is
 * always read for the authenticated caller, so repeating their own id on every
 * row would say nothing. `friendshipId` is kept because accepting, declining
 * or removing acts on the row rather than on the user.
 */
export const FriendListItemSchema = z.object({
  friendshipId: FriendshipBaseSchema.shape.id,
  status: FriendshipBaseSchema.shape.status,
  createdAt: FriendshipBaseSchema.shape.createdAt,
  user: FriendUserSchema,
});

export type FriendshipDTO = z.infer<typeof FriendshipSchema>;
export type FriendshipStatusDTO = z.infer<typeof FriendshipStatusSchema>;
export type FriendshipStatusUpdateDTO = z.infer<
  typeof FriendshipStatusUpdateSchema
>;
export type FriendUserDTO = z.infer<typeof FriendUserSchema>;
export type FriendListItemDTO = z.infer<typeof FriendListItemSchema>;
