import { z } from 'zod';
import { BlockSchema as BlockModelSchema } from '../prisma/schemas/models/Block.schema';
import { UserSchema as UserModelSchema } from '../prisma/schemas/models/User.schema';

export const BlockSchema = BlockModelSchema;

export const BlockedUserSchema = UserModelSchema.pick({
  id: true,
  username: true,
  avatarUrl: true,
});

export const BlockListItemSchema = z.object({
  blockId: BlockSchema.shape.id,
  createdAt: BlockSchema.shape.createdAt,
  user: BlockedUserSchema,
});

export const BlockStatusSchema = z.object({
  blockedByMe: z.boolean(),
  blockedMe: z.boolean(),
});

export type BlockDTO = z.infer<typeof BlockSchema>;
export type BlockedUserDTO = z.infer<typeof BlockedUserSchema>;
export type BlockListItemDTO = z.infer<typeof BlockListItemSchema>;
export type BlockStatusDTO = z.infer<typeof BlockStatusSchema>;
