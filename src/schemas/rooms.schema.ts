import { z } from 'zod';
import { unwrapNullish } from './utils';
import { RoomSchema as RoomModelSchema } from '../prisma/schemas/models/Room.schema';
import { UserPublicProfileSchema } from './users.schema';
import { PollReadSchema } from './polls.schema';
import { MessageReadSchema } from './messages.schema';
import { InvitationReadSchema } from './invitations.schema';
import { RoomMemberSchema } from './room-member.schema';

/**
 * What a client sends to create a room. Unlike a poll, `endsAt` is nullish: a
 * room can stay open indefinitely, whereas a poll must always close.
 */
export const RoomSchema = z.object({
  name: RoomModelSchema.shape.name
    .min(1, 'Title required')
    .max(255, 'Max 255 Characters'),
  description: unwrapNullish(RoomModelSchema.shape.description)
    .max(3000, 'Max 3000 characters')
    .nullish(),
  visibility: RoomModelSchema.shape.visibility,
  endsAt: z.coerce
    .date()
    .refine((val) => val >= new Date(), {
      message: 'Date cannot be in the past',
    })
    .nullish(),
});

export const RoomCreateSchema = RoomSchema;

/**
 * The slice of a room that is safe and cheap to embed in another payload - a
 * poll carries the room it belongs to. Deliberately shallow: it holds no
 * relations, so embedding a room never drags its polls, messages and members
 * along with it.
 */
export const RoomPublicSchema = RoomModelSchema.pick({
  id: true,
  name: true,
  description: true,
  visibility: true,
  endsAt: true,
});

/**
 * The full room the detail view needs. Rooms and polls (and rooms and
 * invitations) import each other, so those members go through `z.lazy` to
 * defer resolution past module evaluation and break the cycle.
 */
export const RoomReadSchema = RoomModelSchema.extend({
  createdBy: UserPublicProfileSchema.nullable(),
  polls: z.array(z.lazy(() => PollReadSchema)),
  messages: z.array(MessageReadSchema),
  invitations: z.array(z.lazy(() => InvitationReadSchema)),
  roomMembers: z.array(RoomMemberSchema),
});

/** PATCH: any subset of the creation fields. */
export const RoomUpdateSchema = RoomSchema.partial();

/** Identifies the room a realtime client is subscribing to or leaving. */
export const RoomChannelSchema = z.object({
  roomId: RoomModelSchema.shape.id,
});

export type RoomCreateDTO = z.infer<typeof RoomCreateSchema>;
export type RoomUpdateDTO = z.infer<typeof RoomUpdateSchema>;
export type RoomReadDTO = z.infer<typeof RoomReadSchema>;
export type RoomPublicDTO = z.infer<typeof RoomPublicSchema>;
export type RoomChannelDTO = z.infer<typeof RoomChannelSchema>;
