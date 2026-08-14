import * as z from 'zod';
import { InvitationStatusSchema } from '../../enums/InvitationStatus.schema';
// prettier-ignore
export const InvitationInputSchema = z.object({
    id: z.number().int(),
    status: InvitationStatusSchema,
    message: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable(),
    roomId: z.number().int(),
    inviterId: z.number().int(),
    inviteeId: z.number().int(),
    room: z.unknown(),
    inviter: z.unknown(),
    invitee: z.unknown()
}).strict();

export type InvitationInputType = z.infer<typeof InvitationInputSchema>;
