import * as z from 'zod';

export const RoomScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'createdAt', 'updatedAt', 'publishedAt', 'bannerUrl', 'visibility', 'status', 'createdById'])

export type RoomScalarFieldEnum = z.infer<typeof RoomScalarFieldEnumSchema>;