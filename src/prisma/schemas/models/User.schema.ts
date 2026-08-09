import * as z from 'zod';
import { GenderSchema } from '../enums/Gender.schema';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { UserThemeSchema } from '../enums/UserTheme.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';

export const UserSchema = z.object({
  id: z.number().int(),
  username: z.string(),
  name: z.string().nullish(),
  surname: z.string().nullish(),
  email: z.string(),
  birthdate: z.date(),
  passwordHash: z.string(),
  role: UserRoleSchema,
  gender: GenderSchema,
  nationality: z.string(),
  city: z.string().nullish(),
  state: z.string().nullish(),
  country: z.string().nullish(),
  company: z.string().nullish(),
  bio: z.string().nullish(),
  score: z.number().int(),
  isOnline: z.boolean(),
  isDeleted: z.boolean(),
  isEmailVerified: z.boolean(),
  visibility: VisibilitySchema.nullish(),
  deletedAt: z.date().nullish(),
  lastSeenAt: z.date().nullish(),
  avatarUrl: z.string().default("/uploads/avatars/default.svg"),
  bannerUrl: z.string().default("/uploads/banners/default.svg"),
  createdAt: z.date(),
  updatedAt: z.date(),
  userTheme: UserThemeSchema,
});

export type UserType = z.infer<typeof UserSchema>;
