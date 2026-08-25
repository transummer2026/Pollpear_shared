import * as z from 'zod';

export const FriendshipScalarFieldEnumSchema = z.enum(['id', 'status', 'createdAt', 'updatedAt', 'deletedAt', 'requesterId', 'addresseeId'])

export type FriendshipScalarFieldEnum = z.infer<typeof FriendshipScalarFieldEnumSchema>;