import * as z from 'zod';
export const OauthFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  provider: z.unknown(),
  providerUserId: z.string(),
  providerUrl: z.string(),
  accessToken: z.string(),
  refreshToken: z.string(),
  tokenType: z.string(),
  expiresAt: z.date(),
  scope: z.string(),
  grantType: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.number().int(),
  user: z.unknown()
}));