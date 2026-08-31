import { z } from 'zod';
import { InvitationSchema as InvitationModelSchema } from '../prisma/schemas/models/Invitation.schema';
import { RoomPublicSchema } from './rooms.schema';
import { unwrapNullish } from './utils';
import { UserPublicProfileSchema } from './users.schema';

/**
 * The full invitation shape. Not exported: none of the three ids is ever sent
 * by the client - the room comes from the route, the inviter from the session
 * and the invitee from the request target - which is why only `message`
 * survives into the create payload below. Taking them from the body instead
 * would let a caller invite anyone to any room on someone else's behalf.
 */
export const InvitationSchema = z.object({
  message: unwrapNullish(InvitationModelSchema.shape.message)
    .max(255, 'Max 255 characters')
    .nullish(),
  roomId: InvitationModelSchema.shape.roomId,
  inviterId: InvitationModelSchema.shape.inviterId,
  inviteeId: InvitationModelSchema.shape.inviteeId,
});

export const InvitationCreateSchema = InvitationSchema.pick({
  message: true,
});

/**
 * An invitation with both parties and the room resolved, so a notification can
 * be rendered without further lookups. `room` goes through `z.lazy` because
 * rooms.schema imports this module back.
 */
export const InvitationReadSchema = InvitationModelSchema.extend({
  inviter: UserPublicProfileSchema,
  invitee: UserPublicProfileSchema,
  room: z.lazy(() => RoomPublicSchema),
});

/** Compact row for listing invitations: who was invited and where it stands. */
export const InvitationListSchema = z.object({
  inviteeName: UserPublicProfileSchema.shape.name,
  status: InvitationModelSchema.shape.status,
});

const InvitationStatusSchema = InvitationModelSchema.shape.status;

/**
 * Answering an invitation. `pending` is excluded because that is the state the
 * row is created in: an answer can only move it away from there, never back.
 */
export const InvitationStatusUpdateSchema = z.object({
  status: InvitationStatusSchema.exclude(['pending']),
});

export type InvitationReadDTO = z.infer<typeof InvitationReadSchema>;
export type InvitationCreateDTO = z.infer<typeof InvitationCreateSchema>;
export type InvitationListDTO = z.infer<typeof InvitationListSchema>;
export type InvitationStatusUpdateDTO = z.infer<
  typeof InvitationStatusUpdateSchema
>;
