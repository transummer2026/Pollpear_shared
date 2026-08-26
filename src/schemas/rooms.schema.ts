import { z } from 'zod';
import { unwrapNullish } from './utils';
import { RoomSchema as RoomModelSchema } from '../prisma/schemas/models/Room.schema';
import { UserPublicProfileSchema } from './users.schema';
import { PollReadSchema } from './polls.schema';
import { MessageSchema } from './messages.schema';
import { InvitationSchema } from './invitations.schema';
import { RoomMemberSchema } from './room-member.schema';

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

export const RoomPublicSchema = RoomSchema.extend({
  id: RoomModelSchema.shape.id,
});

export const RoomReadSchema = RoomModelSchema.extend({
  createdBy: UserPublicProfileSchema.nullable(),
  polls: z.array(z.lazy(() => PollReadSchema)),
  messages: z.array(MessageSchema),
  invitations: z.array(InvitationSchema),
  roomMembers: z.array(RoomMemberSchema),
  status: RoomModelSchema.shape.status,
});

export const RoomUpdateSchema = RoomSchema.partial();

export type RoomCreateDTO = z.infer<typeof RoomCreateSchema>;
export type RoomUpdateDTO = z.infer<typeof RoomUpdateSchema>;
export type RoomReadDTO = z.infer<typeof RoomReadSchema>;
export type RoomPublicDTO = z.infer<typeof RoomPublicSchema>;
