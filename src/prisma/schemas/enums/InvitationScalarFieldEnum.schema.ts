import * as z from 'zod';

export const InvitationScalarFieldEnumSchema = z.enum(['id', 'status', 'message', 'createdAt', 'updatedAt', 'deletedAt', 'roomId', 'inviterId', 'inviteeId'])

export type InvitationScalarFieldEnum = z.infer<typeof InvitationScalarFieldEnumSchema>;