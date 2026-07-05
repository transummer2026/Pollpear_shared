import * as z from "zod";

export const InvitationStatusSchema = z.enum([
  "pending",
  "accepted",
  "rejected",
]);

export type InvitationStatus = z.infer<typeof InvitationStatusSchema>;
