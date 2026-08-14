import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumOauthProviderWithAggregatesFilterObjectSchema as EnumOauthProviderWithAggregatesFilterObjectSchema } from './EnumOauthProviderWithAggregatesFilter.schema';
import { OauthProviderSchema } from '../enums/OauthProvider.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { EnumGrantTypeWithAggregatesFilterObjectSchema as EnumGrantTypeWithAggregatesFilterObjectSchema } from './EnumGrantTypeWithAggregatesFilter.schema';
import { GrantTypeSchema } from '../enums/GrantType.schema'

const oauthscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => OauthScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => OauthScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OauthScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OauthScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => OauthScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  provider: z.union([z.lazy(() => EnumOauthProviderWithAggregatesFilterObjectSchema), OauthProviderSchema]).optional(),
  providerUserId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  providerUrl: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  accessToken: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  refreshToken: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  tokenType: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  expiresAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  scope: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  grantType: z.union([z.lazy(() => EnumGrantTypeWithAggregatesFilterObjectSchema), GrantTypeSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const OauthScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.OauthScalarWhereWithAggregatesInput> = oauthscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.OauthScalarWhereWithAggregatesInput>;
export const OauthScalarWhereWithAggregatesInputObjectZodSchema = oauthscalarwherewithaggregatesinputSchema;
