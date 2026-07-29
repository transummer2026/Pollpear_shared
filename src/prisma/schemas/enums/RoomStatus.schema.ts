import * as z from 'zod';

export const RoomStatusSchema = z.enum(['active', 'closed'])

export type RoomStatus = z.infer<typeof RoomStatusSchema>;