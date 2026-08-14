import * as z from 'zod';
import { InvitationStatusSchema } from '../enums/InvitationStatus.schema';

export const InvitationSchema = z.object({
  id: z.number().int(),
  status: InvitationStatusSchema,
  message: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
  roomId: z.number().int(),
  inviterId: z.number().int(),
  inviteeId: z.number().int(),
});

export type InvitationType = z.infer<typeof InvitationSchema>;
