import * as z from 'zod';

export const ApiKeyScalarFieldEnumSchema = z.enum(['id', 'keyHash', 'appName', 'revoked', 'expiredAt', 'createdAt', 'updatedAt', 'ownerId'])

export type ApiKeyScalarFieldEnum = z.infer<typeof ApiKeyScalarFieldEnumSchema>;