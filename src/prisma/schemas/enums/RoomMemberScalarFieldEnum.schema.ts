import * as z from 'zod';

export const RoomMemberScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'updatedAt', 'joinedAt', 'roomId', 'userId'])

export type RoomMemberScalarFieldEnum = z.infer<typeof RoomMemberScalarFieldEnumSchema>;