import * as z from "zod";

export const InvitationScalarFieldEnumSchema = z.enum([
  "id",
  "status",
  "createdAt",
  "updatedAt",
  "label",
  "roomId",
  "inviterId",
  "inviteeId",
]);

export type InvitationScalarFieldEnum = z.infer<
  typeof InvitationScalarFieldEnumSchema
>;
