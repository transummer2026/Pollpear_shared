import { z } from 'zod';
import { InvitationSchema as InvitationModelSchema } from '../prisma/schemas/models/Invitation.schema';
import { unwrapNullish } from './utils';
import { UserPublicProfileSchema } from './users.schema';
import { RoomInvitationSchema } from './rooms.schema';

export const InvitationSchema = z.object({
  message: unwrapNullish(InvitationModelSchema.shape.message)
    .max(255, 'Max 255 characters')
    .nullish(),
  roomId: InvitationModelSchema.shape.roomId,
  inviterId: InvitationModelSchema.shape.inviterId,
  inviteeId: InvitationModelSchema.shape.inviteeId,
});

export const InvitationCreateSchema = InvitationSchema;

export const InvitationReadSchema = InvitationModelSchema.extend({
  inviterId: UserPublicProfileSchema,
  inviteeId: UserPublicProfileSchema,
  roomId: z.lazy(() => RoomInvitationSchema),
  message: InvitationModelSchema.shape.message,
  status: InvitationModelSchema.shape.status,
});

export const InvitationListSchema = z.object({
  inviteeName: UserPublicProfileSchema.shape.name,
  status: InvitationModelSchema.shape.status,
});

export const InvitationUpdateSchema = InvitationSchema.partial();

export type InvitationCreateDTO = z.infer<typeof InvitationCreateSchema>;
export type InvitationUpdateDTO = z.infer<typeof InvitationUpdateSchema>;
