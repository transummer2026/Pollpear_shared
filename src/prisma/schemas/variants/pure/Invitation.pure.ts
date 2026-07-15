import * as z from 'zod';
import { InvitationStatusSchema } from '../../enums/InvitationStatus.schema';
// prettier-ignore
export const InvitationModelSchema = z.object({
    id: z.number().int(),
    status: InvitationStatusSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    label: z.string().nullable(),
    roomId: z.number().int(),
    inviterId: z.number().int(),
    inviteeId: z.number().int(),
    room: z.unknown(),
    inviter: z.unknown(),
    invitee: z.unknown()
}).strict();

export type InvitationPureType = z.infer<typeof InvitationModelSchema>;
