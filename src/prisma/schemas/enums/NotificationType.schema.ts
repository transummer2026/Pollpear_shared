import * as z from 'zod';

export const NotificationTypeSchema = z.enum(['friend_request', 'friend_accepted', 'poll_update', 'room_invitation', 'room_invitation_accepted', 'room_message', 'other'])

export type NotificationType = z.infer<typeof NotificationTypeSchema>;