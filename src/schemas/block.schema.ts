import { z } from 'zod';
import { BlockSchema as BlockModelSchema } from '../prisma/schemas/models/Block.schema';
import { UserSchema as UserModelSchema } from '../prisma/schemas/models/User.schema';

/**
 * Blocking, unlike friendship, is one row per direction: each side blocks
 * independently and neither is told about the other's row.
 */
export const BlockSchema = BlockModelSchema;

/** Minimal identity for a blocked user - no presence, a blocked user's status is not the blocker's business. */
export const BlockedUserSchema = UserModelSchema.pick({
  id: true,
  username: true,
  avatarUrl: true,
});

/** A row in the caller's block list; `blockId` is what unblocking acts on. */
export const BlockListItemSchema = z.object({
  blockId: BlockSchema.shape.id,
  createdAt: BlockSchema.shape.createdAt,
  user: BlockedUserSchema,
});

/**
 * Both directions are reported because they drive different decisions:
 * `blockedByMe` toggles the block/unblock action, while `blockedMe` gates
 * whether the caller may interact at all - and the UI must not reveal which,
 * since being told you were blocked is itself information.
 */
export const BlockStatusSchema = z.object({
  blockedByMe: z.boolean(),
  blockedMe: z.boolean(),
});

export type BlockDTO = z.infer<typeof BlockSchema>;
export type BlockedUserDTO = z.infer<typeof BlockedUserSchema>;
export type BlockListItemDTO = z.infer<typeof BlockListItemSchema>;
export type BlockStatusDTO = z.infer<typeof BlockStatusSchema>;
