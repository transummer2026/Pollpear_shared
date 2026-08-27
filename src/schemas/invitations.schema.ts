import { z } from 'zod';
import { InvitationSchema as InvitationModelSchema } from '../prisma/schemas/models/Invitation.schema';
import { unwrapNullish } from './utils';

export const InvitationSchema = z.object({
  message: unwrapNullish(InvitationModelSchema.shape.message)
    .max(255, 'Max 255 characters')
    .nullish(),
  roomId: InvitationModelSchema.shape.roomId,
  inviterId: InvitationModelSchema.shape.inviterId,
  inviteeId: InvitationModelSchema.shape.inviteeId,
});

export type InvitationDTO = z.infer<typeof InvitationSchema>;
