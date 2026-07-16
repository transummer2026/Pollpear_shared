import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OauthProviderSchema } from '../enums/OauthProvider.schema';
import { GrantTypeSchema } from '../enums/GrantType.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  provider: OauthProviderSchema,
  providerUserId: z.string(),
  providerUrl: z.string(),
  accessToken: z.string(),
  refreshToken: z.string(),
  tokenType: z.string(),
  expiresAt: z.coerce.date(),
  scope: z.string(),
  grantType: GrantTypeSchema,
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const OauthUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.OauthUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OauthUncheckedCreateWithoutUserInput>;
export const OauthUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
