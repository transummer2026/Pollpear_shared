import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { EnumUserRoleFieldUpdateOperationsInputObjectSchema as EnumUserRoleFieldUpdateOperationsInputObjectSchema } from './EnumUserRoleFieldUpdateOperationsInput.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { EnumGenderFieldUpdateOperationsInputObjectSchema as EnumGenderFieldUpdateOperationsInputObjectSchema } from './EnumGenderFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { NullableEnumVisibilityFieldUpdateOperationsInputObjectSchema as NullableEnumVisibilityFieldUpdateOperationsInputObjectSchema } from './NullableEnumVisibilityFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { UserThemeSchema } from '../enums/UserTheme.schema';
import { EnumUserThemeFieldUpdateOperationsInputObjectSchema as EnumUserThemeFieldUpdateOperationsInputObjectSchema } from './EnumUserThemeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  username: z.union([z.string().max(32), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  surname: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  email: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  birthdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  passwordHash: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([UserRoleSchema, z.lazy(() => EnumUserRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  gender: z.union([GenderSchema, z.lazy(() => EnumGenderFieldUpdateOperationsInputObjectSchema)]).optional(),
  nationality: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  city: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  state: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  country: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  company: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  bio: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  score: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  isOnline: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDeleted: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  visibility: z.union([VisibilitySchema, z.lazy(() => NullableEnumVisibilityFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  lastSeenAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  avatarUrl: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  bannerUrl: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  userTheme: z.union([UserThemeSchema, z.lazy(() => EnumUserThemeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateInputObjectSchema: z.ZodType<Prisma.UserUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateInput>;
export const UserUpdateInputObjectZodSchema = makeSchema();
