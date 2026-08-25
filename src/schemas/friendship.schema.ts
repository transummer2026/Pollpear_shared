import { z } from 'zod';
import { FriendshipSchema as FriendshipModelSchema } from '../prisma/schemas/models/Friendship.schema';
import { UserSchema as UserModelSchema } from '../prisma/schemas/models/User.schema';

export const FriendshipSchema = FriendshipModelSchema.omit({
  deletedAt: true,
});

export const FriendshipStatusSchema = FriendshipSchema.shape.status;

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
  friendshipId: FriendshipSchema.shape.id,
  status: FriendshipSchema.shape.status,
  createdAt: FriendshipSchema.shape.createdAt,
  user: FriendUserSchema,
});

export type FriendshipDTO = z.infer<typeof FriendshipSchema>;
export type FriendshipStatusDTO = z.infer<typeof FriendshipStatusSchema>;
export type FriendshipStatusUpdateDTO = z.infer<
  typeof FriendshipStatusUpdateSchema
>;
export type FriendUserDTO = z.infer<typeof FriendUserSchema>;
export type FriendListItemDTO = z.infer<typeof FriendListItemSchema>;
