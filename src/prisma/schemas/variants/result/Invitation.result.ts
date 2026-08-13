import * as z from 'zod';
import { InvitationStatusSchema } from '../../enums/InvitationStatus.schema';
// prettier-ignore
export const InvitationResultSchema = z.object({
    id: z.number().int(),
    status: InvitationStatusSchema,
    message: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    roomId: z.number().int(),
    inviterId: z.number().int(),
    inviteeId: z.number().int(),
    room: z.unknown(),
    inviter: z.unknown(),
    invitee: z.unknown()
}).strict();

export type InvitationResultType = z.infer<typeof InvitationResultSchema>;
