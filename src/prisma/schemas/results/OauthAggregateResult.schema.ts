import * as z from 'zod';
export const OauthAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    provider: z.number(),
    providerUserId: z.number(),
    providerUrl: z.number(),
    accessToken: z.number(),
    refreshToken: z.number(),
    tokenType: z.number(),
    expiresAt: z.number(),
    scope: z.number(),
    grantType: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    userId: z.number(),
    user: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    userId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    userId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    providerUserId: z.string().nullable(),
    providerUrl: z.string().nullable(),
    accessToken: z.string().nullable(),
    refreshToken: z.string().nullable(),
    tokenType: z.string().nullable(),
    expiresAt: z.date().nullable(),
    scope: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    userId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    providerUserId: z.string().nullable(),
    providerUrl: z.string().nullable(),
    accessToken: z.string().nullable(),
    refreshToken: z.string().nullable(),
    tokenType: z.string().nullable(),
    expiresAt: z.date().nullable(),
    scope: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    userId: z.number().int().nullable()
  }).nullable().optional()});