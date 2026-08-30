import { z } from 'zod';
import { InvitationSchema as InvitationModelSchema } from '../prisma/schemas/models/Invitation.schema';
import { RoomPublicSchema } from './rooms.schema';
import { unwrapNullish } from './utils';
import { UserPublicProfileSchema } from './users.schema';

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

export const InvitationReadSchema = InvitationModelSchema.extend({
  inviter: UserPublicProfileSchema,
  invitee: UserPublicProfileSchema,
  room: z.lazy(() => RoomPublicSchema),
});

export const InvitationListSchema = z.object({
  inviteeName: UserPublicProfileSchema.shape.name,
  status: InvitationModelSchema.shape.status,
});

export const InvitationUpdateSchema = InvitationSchema.partial();

export const InvitationStatusSchema = InvitationModelSchema.shape.status;

export const InvitationStatusUpdateSchema = z.object({
  status: InvitationStatusSchema.exclude(['pending']),
});

export type InvitationDTO = z.infer<typeof InvitationSchema>;
export type InvitationReadDTO = z.infer<typeof InvitationReadSchema>;
export type InvitationCreateDTO = z.infer<typeof InvitationCreateSchema>;
export type InvitationUpdateDTO = z.infer<typeof InvitationUpdateSchema>;
export type InvitationListDTO = z.infer<typeof InvitationListSchema>;
export type InvitationStatusUpdateDTO = z.infer<
  typeof InvitationStatusUpdateSchema
>;
