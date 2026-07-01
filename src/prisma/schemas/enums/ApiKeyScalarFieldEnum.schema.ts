import * as z from 'zod';

export const ApiKeyScalarFieldEnumSchema = z.enum(['id', 'keyHash', 'appName', 'revoked', 'createdAt', 'updatedAt', 'ownerId'])

export type ApiKeyScalarFieldEnum = z.infer<typeof ApiKeyScalarFieldEnumSchema>;