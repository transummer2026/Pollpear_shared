import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  provider: z.literal(true).optional(),
  providerUserId: z.literal(true).optional(),
  providerUrl: z.literal(true).optional(),
  accessToken: z.literal(true).optional(),
  refreshToken: z.literal(true).optional(),
  tokenType: z.literal(true).optional(),
  expiresAt: z.literal(true).optional(),
  scope: z.literal(true).optional(),
  grantType: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  userId: z.literal(true).optional()
}).strict();
export const OauthMinAggregateInputObjectSchema: z.ZodType<Prisma.OauthMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OauthMinAggregateInputType>;
export const OauthMinAggregateInputObjectZodSchema = makeSchema();
