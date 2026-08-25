import * as z from 'zod';

export const NotificationScalarFieldEnumSchema = z.enum(['id', 'type', 'content', 'isRead', 'createdAt', 'updatedAt', 'userId'])

export type NotificationScalarFieldEnum = z.infer<typeof NotificationScalarFieldEnumSchema>;