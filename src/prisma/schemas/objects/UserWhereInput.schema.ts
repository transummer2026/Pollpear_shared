import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumUserRoleFilterObjectSchema as EnumUserRoleFilterObjectSchema } from './EnumUserRoleFilter.schema';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { EnumGenderFilterObjectSchema as EnumGenderFilterObjectSchema } from './EnumGenderFilter.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { EnumVisibilityNullableFilterObjectSchema as EnumVisibilityNullableFilterObjectSchema } from './EnumVisibilityNullableFilter.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { EnumUserThemeFilterObjectSchema as EnumUserThemeFilterObjectSchema } from './EnumUserThemeFilter.schema';
import { UserThemeSchema } from '../enums/UserTheme.schema'

const userwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  username: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(32)]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  surname: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  birthdate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  passwordHash: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  role: z.union([z.lazy(() => EnumUserRoleFilterObjectSchema), UserRoleSchema]).optional(),
  gender: z.union([z.lazy(() => EnumGenderFilterObjectSchema), GenderSchema]).optional(),
  nationality: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  city: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  state: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  country: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  company: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  bio: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  score: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isOnline: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isDeleted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  visibility: z.union([z.lazy(() => EnumVisibilityNullableFilterObjectSchema), VisibilitySchema]).optional().nullable(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  lastSeenAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  avatarUrl: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  bannerUrl: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  userTheme: z.union([z.lazy(() => EnumUserThemeFilterObjectSchema), UserThemeSchema]).optional()
}).strict();
export const UserWhereInputObjectSchema: z.ZodType<Prisma.UserWhereInput> = userwhereinputSchema as unknown as z.ZodType<Prisma.UserWhereInput>;
export const UserWhereInputObjectZodSchema = userwhereinputSchema;
