import { z } from 'zod';
import { FriendshipSchema as FriendshipModelSchema } from '../prisma/schemas/models/Friendship.schema';
import { UserSchema as UserModelSchema } from '../prisma/schemas/models/User.schema';

const FriendshipBaseSchema = FriendshipModelSchema.omit({
  deletedAt: true,
});

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

export const FriendshipStatusUpdateSchema = z.object({
  status: FriendshipStatusSchema.exclude(['pending']),
});

export const FriendUserSchema = UserModelSchema.pick({
  id: true,
  username: true,
  avatarUrl: true,
  isOnline: true,
});

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
