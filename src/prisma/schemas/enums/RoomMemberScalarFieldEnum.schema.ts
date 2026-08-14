import * as z from 'zod';

export const RoomMemberScalarFieldEnumSchema = z.enum(['id', 'joinedAt', 'createdAt', 'updatedAt', 'deletedAt', 'roomId', 'userId'])

export type RoomMemberScalarFieldEnum = z.infer<typeof RoomMemberScalarFieldEnumSchema>;