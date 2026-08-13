import { z } from 'zod';
import { UserSchema as UserModelSchema } from '../prisma/schemas/models/User.schema';
import { unwrapNullish } from './utils';
import { BirthdateFormat, EmailFormat } from './formats.schema';

export const UserSchema = UserModelSchema.omit({
  passwordHash: true,
  updatedAt: true,
});

export const UserPublicProfileSchema = UserSchema.omit({
  email: true,
  birthdate: true,
  role: true,
  gender: true,
  nationality: true,
  city: true,
  state: true,
  country: true,
  company: true,
  bio: true,
  isOnline: true,
  isEmailVerified: true,
  visibility: true,
  deletedAt: true,
  lastSeenAt: true,
  avatarUrl: true,
  bannerUrl: true,
  createdAt: true,
  userTheme: true,
});

export const GenderSchema = UserSchema.shape.gender;

const ValidatedUserFieldsSchema = z.object({
  username: UserModelSchema.shape.username
    .min(5, 'Min 5 characters')
    .max(32, 'Max 32 characters')
    .regex(/^[\w.]+$/, 'Only letters, numbers, underscores and dots'),
  email: EmailFormat,
  nationality: UserModelSchema.shape.nationality
    .min(3, 'Min 3 characters')
    .max(20, 'Max 20 characters')
    .regex(/^[a-zA-Z]{2,15}(-?\s?[a-zA-Z]{1,10})?$/, 'Only letters'),
  gender: z.enum(GenderSchema.options, { error: 'Select a gender' }),
  name: unwrapNullish(UserModelSchema.shape.name)
    .max(255, 'Max 255 characters')
    .nullish(),
  surname: unwrapNullish(UserModelSchema.shape.surname)
    .max(255, 'Max 255 characters')
    .nullish(),
  city: unwrapNullish(UserModelSchema.shape.city)
    .max(255, 'Max 255 characters')
    .nullish(),
  state: unwrapNullish(UserModelSchema.shape.state)
    .max(255, 'Max 255 characters')
    .nullish(),
  country: unwrapNullish(UserModelSchema.shape.country)
    .max(255, 'Max 255 characters')
    .nullish(),
  company: unwrapNullish(UserModelSchema.shape.company)
    .max(255, 'Max 255 characters')
    .nullish(),
});

export const UserCreateSchema = ValidatedUserFieldsSchema.extend({
  birthdate: BirthdateFormat,
  userTheme: UserModelSchema.shape.userTheme,
});

export const UserUpdateSchema = ValidatedUserFieldsSchema.extend({
  birthdate: BirthdateFormat,
  userTheme: UserModelSchema.shape.userTheme,
  bio: unwrapNullish(UserModelSchema.shape.bio)
    .max(255, 'Max 255 characters')
    .nullish(),
}).partial();

export type UserDTO = z.infer<typeof UserSchema>;
export type UserPublicProfileDTO = z.infer<typeof UserPublicProfileSchema>;
export type UserUpdateInput = z.input<typeof UserUpdateSchema>;
export type UserUpdateDTO = z.output<typeof UserUpdateSchema>;
export type GenderDTO = z.infer<typeof GenderSchema>;
export type UserCreateDTO = z.infer<typeof UserCreateSchema>;
