import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OauthProviderSchema } from '../enums/OauthProvider.schema';
import { GrantTypeSchema } from '../enums/GrantType.schema'

const makeSchema = () => z.object({
  provider: OauthProviderSchema,
  providerUserId: z.string().max(255),
  providerUrl: z.string().max(255),
  accessToken: z.string(),
  refreshToken: z.string(),
  tokenType: z.string().max(255),
  expiresAt: z.coerce.date(),
  scope: z.string().max(255),
  grantType: GrantTypeSchema,
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const OauthCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.OauthCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OauthCreateWithoutUserInput>;
export const OauthCreateWithoutUserInputObjectZodSchema = makeSchema();
