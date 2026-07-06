import * as z from "zod";

export const NotificationTypeSchema = z.enum([
  "friend_request",
  "poll_update",
  "room_invitation",
  "room_message",
  "other",
]);

export type NotificationType = z.infer<typeof NotificationTypeSchema>;
