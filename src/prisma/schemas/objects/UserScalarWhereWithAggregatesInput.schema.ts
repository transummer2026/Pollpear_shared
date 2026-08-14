import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { EnumUserRoleWithAggregatesFilterObjectSchema as EnumUserRoleWithAggregatesFilterObjectSchema } from './EnumUserRoleWithAggregatesFilter.schema';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { EnumGenderWithAggregatesFilterObjectSchema as EnumGenderWithAggregatesFilterObjectSchema } from './EnumGenderWithAggregatesFilter.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { EnumVisibilityWithAggregatesFilterObjectSchema as EnumVisibilityWithAggregatesFilterObjectSchema } from './EnumVisibilityWithAggregatesFilter.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { EnumUserThemeWithAggregatesFilterObjectSchema as EnumUserThemeWithAggregatesFilterObjectSchema } from './EnumUserThemeWithAggregatesFilter.schema';
import { UserThemeSchema } from '../enums/UserTheme.schema'

const userscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  username: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(32)]).optional(),
  name: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  surname: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  birthdate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  passwordHash: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  role: z.union([z.lazy(() => EnumUserRoleWithAggregatesFilterObjectSchema), UserRoleSchema]).optional(),
  gender: z.union([z.lazy(() => EnumGenderWithAggregatesFilterObjectSchema), GenderSchema]).optional(),
  nationality: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  city: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  state: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  country: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  company: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  bio: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  score: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  isOnline: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  isEmailVerified: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  visibility: z.union([z.lazy(() => EnumVisibilityWithAggregatesFilterObjectSchema), VisibilitySchema]).optional(),
  lastSeenAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  avatarUrl: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  bannerUrl: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  userTheme: z.union([z.lazy(() => EnumUserThemeWithAggregatesFilterObjectSchema), UserThemeSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const UserScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = userscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.UserScalarWhereWithAggregatesInput>;
export const UserScalarWhereWithAggregatesInputObjectZodSchema = userscalarwherewithaggregatesinputSchema;
