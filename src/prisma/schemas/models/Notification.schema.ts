import * as z from "zod";
import { NotificationTypeSchema } from "../enums/NotificationType.schema";

export const NotificationSchema = z.object({
  id: z.number().int(),
  type: NotificationTypeSchema,
  content: z.string(),
  isRead: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.number().int(),
});

export type NotificationType = z.infer<typeof NotificationSchema>;
