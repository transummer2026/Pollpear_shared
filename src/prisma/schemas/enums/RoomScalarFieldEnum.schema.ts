import * as z from 'zod';

export const RoomScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'bannerUrl', 'endsAt', 'createdAt', 'updatedAt', 'deletedAt', 'visibility', 'status', 'createdById'])

export type RoomScalarFieldEnum = z.infer<typeof RoomScalarFieldEnumSchema>;