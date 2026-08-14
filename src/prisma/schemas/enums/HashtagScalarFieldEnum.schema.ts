import * as z from 'zod';

export const HashtagScalarFieldEnumSchema = z.enum(['id', 'name', 'createdAt', 'updatedAt', 'deletedAt'])

export type HashtagScalarFieldEnum = z.infer<typeof HashtagScalarFieldEnumSchema>;