import { z } from 'zod';
import { NotificationSchema as NotificationModelSchema } from '../prisma/schemas/models/Notification.schema';
import { NotificationTypeSchema } from '../prisma/schemas/enums/NotificationType.schema';

/**
 * `userId` is dropped because notifications are only ever fetched for the
 * authenticated caller - echoing the recipient back on every row adds nothing
 * and invites a client to filter on it instead of trusting the endpoint.
 * `updatedAt` is bookkeeping.
 */
export const NotificationSchema = NotificationModelSchema.omit({
  userId: true,
  updatedAt: true,
});

/**
 * Re-exported so the UI can switch on the same enum the db stores (icon,
 * wording, target route) without reaching into the generated tree, which is
 * regenerated from the Prisma schema and should stay an implementation detail.
 */
export { NotificationTypeSchema };

export type NotificationDTO = z.infer<typeof NotificationSchema>;
export type NotificationTypeDTO = z.infer<typeof NotificationTypeSchema>;
