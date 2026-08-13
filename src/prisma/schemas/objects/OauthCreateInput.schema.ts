import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OauthProviderSchema } from '../enums/OauthProvider.schema';
import { GrantTypeSchema } from '../enums/GrantType.schema';
import { UserCreateNestedOneWithoutOauthsInputObjectSchema as UserCreateNestedOneWithoutOauthsInputObjectSchema } from './UserCreateNestedOneWithoutOauthsInput.schema'

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
  user: z.lazy(() => UserCreateNestedOneWithoutOauthsInputObjectSchema)
}).strict();
export const OauthCreateInputObjectSchema: z.ZodType<Prisma.OauthCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.OauthCreateInput>;
export const OauthCreateInputObjectZodSchema = makeSchema();
