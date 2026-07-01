import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { UserThemeSchema } from '../enums/UserTheme.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  username: z.string().max(32),
  name: z.string().max(255).optional().nullable(),
  surname: z.string().max(255).optional().nullable(),
  email: z.string().max(255),
  birthdate: z.coerce.date(),
  passwordHash: z.string().max(255),
  role: UserRoleSchema,
  gender: GenderSchema,
  nationality: z.string().max(255),
  city: z.string().max(255).optional().nullable(),
  state: z.string().max(255).optional().nullable(),
  country: z.string().max(255).optional().nullable(),
  company: z.string().max(255).optional().nullable(),
  bio: z.string().max(255).optional().nullable(),
  score: z.number().int().optional(),
  isOnline: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  visibility: VisibilitySchema.optional().nullable(),
  deletedAt: z.coerce.date().optional().nullable(),
  lastSeenAt: z.coerce.date().optional().nullable(),
  avatarUrl: z.string().max(255).optional(),
  bannerUrl: z.string().max(255).optional(),
  createdAt: z.coerce.date().optional(),
  userTheme: UserThemeSchema
}).strict();
export const UserUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateInput>;
export const UserUncheckedCreateInputObjectZodSchema = makeSchema();
