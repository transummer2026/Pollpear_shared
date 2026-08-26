import * as z from 'zod';
import { NotificationTypeSchema } from '../../enums/NotificationType.schema';
// prettier-ignore
export const NotificationInputSchema = z.object({
    id: z.number().int(),
    type: NotificationTypeSchema,
    content: z.string(),
    isRead: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    userId: z.number().int(),
    user: z.unknown(),
    actorId: z.number().int().optional().nullable()
}).strict();

export type NotificationInputType = z.infer<typeof NotificationInputSchema>;
