import * as z from "zod";
import { NotificationTypeSchema } from "../../enums/NotificationType.schema";
// prettier-ignore
export const NotificationInputSchema = z.object({
    type: NotificationTypeSchema,
    content: z.string(),
    isRead: z.boolean(),
    userId: z.number().int(),
    user: z.unknown()
}).strict();

export type NotificationInputType = z.infer<typeof NotificationInputSchema>;
