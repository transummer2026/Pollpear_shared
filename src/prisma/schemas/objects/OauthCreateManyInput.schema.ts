import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OauthProviderSchema } from '../enums/OauthProvider.schema';
import { GrantTypeSchema } from '../enums/GrantType.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  provider: OauthProviderSchema,
  providerUserId: z.string().max(255),
  providerUrl: z.string().max(255),
  accessToken: z.string().max(255),
  refreshToken: z.string().max(255),
  tokenType: z.string().max(255),
  expiresAt: z.coerce.date(),
  scope: z.string().max(255),
  grantType: GrantTypeSchema,
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.number().int()
}).strict();
export const OauthCreateManyInputObjectSchema: z.ZodType<Prisma.OauthCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.OauthCreateManyInput>;
export const OauthCreateManyInputObjectZodSchema = makeSchema();
