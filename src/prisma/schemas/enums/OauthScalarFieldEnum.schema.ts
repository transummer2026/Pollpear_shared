import * as z from 'zod';

export const OauthScalarFieldEnumSchema = z.enum(['id', 'provider', 'providerUserId', 'providerUrl', 'accessToken', 'refreshToken', 'tokenType', 'expiresAt', 'scope', 'grantType', 'createdAt', 'updatedAt', 'userId'])

export type OauthScalarFieldEnum = z.infer<typeof OauthScalarFieldEnumSchema>;