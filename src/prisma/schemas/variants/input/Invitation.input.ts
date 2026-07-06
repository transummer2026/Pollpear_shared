import * as z from "zod";
import { InvitationStatusSchema } from "../../enums/InvitationStatus.schema";
// prettier-ignore
export const InvitationInputSchema = z.object({
    status: InvitationStatusSchema,
    label: z.string().optional().nullable(),
    roomId: z.number().int(),
    inviterId: z.number().int(),
    inviteeId: z.number().int(),
    room: z.unknown(),
    inviter: z.unknown(),
    invitee: z.unknown()
}).strict();

export type InvitationInputType = z.infer<typeof InvitationInputSchema>;
