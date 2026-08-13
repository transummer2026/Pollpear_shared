import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumOauthProviderFilterObjectSchema as EnumOauthProviderFilterObjectSchema } from './EnumOauthProviderFilter.schema';
import { OauthProviderSchema } from '../enums/OauthProvider.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumGrantTypeFilterObjectSchema as EnumGrantTypeFilterObjectSchema } from './EnumGrantTypeFilter.schema';
import { GrantTypeSchema } from '../enums/GrantType.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const oauthwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => OauthWhereInputObjectSchema), z.lazy(() => OauthWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OauthWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OauthWhereInputObjectSchema), z.lazy(() => OauthWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  provider: z.union([z.lazy(() => EnumOauthProviderFilterObjectSchema), OauthProviderSchema]).optional(),
  providerUserId: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  providerUrl: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  accessToken: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  refreshToken: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tokenType: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  expiresAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  scope: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  grantType: z.union([z.lazy(() => EnumGrantTypeFilterObjectSchema), GrantTypeSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const OauthWhereInputObjectSchema: z.ZodType<Prisma.OauthWhereInput> = oauthwhereinputSchema as unknown as z.ZodType<Prisma.OauthWhereInput>;
export const OauthWhereInputObjectZodSchema = oauthwhereinputSchema;
