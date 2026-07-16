import * as z from 'zod';
export const OauthFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});