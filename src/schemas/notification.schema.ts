import { z } from 'zod';
import { NotificationSchema as NotificationModelSchema } from '../prisma/schemas/models/Notification.schema';
import { NotificationTypeSchema } from '../prisma/schemas/enums/NotificationType.schema';

export const NotificationSchema = NotificationModelSchema.omit({
  userId: true,
  updatedAt: true,
});

export { NotificationTypeSchema };

export type NotificationDTO = z.infer<typeof NotificationSchema>;
export type NotificationTypeDTO = z.infer<typeof NotificationTypeSchema>;
