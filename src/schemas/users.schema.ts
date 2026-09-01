import { z } from 'zod';
import { UserSchema as UserModelSchema } from '../prisma/schemas/models/User.schema';
import { unwrapNullish } from './utils';
import { BirthdateFormat, EmailFormat } from './formats.schema';

/**
 * The user as returned to themselves: the whole row minus `passwordHash`,
 * which must never leave the server, and `updatedAt`, which is bookkeeping.
 */
export const UserSchema = UserModelSchema.omit({
  passwordHash: true,
  updatedAt: true,
});

/**
 * What anyone may see of another user - id, username, name, surname,
 * avatarUrl, bio. Built by listing what to hide rather than what to show, so a
 * column added to the User model is exposed by default: add it to this omit
 * list too unless it is genuinely public.
 */
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
  isOnline: true,
  isEmailVerified: true,
  visibility: true,
  deletedAt: true,
  lastSeenAt: true,
  bannerUrl: true,
  createdAt: true,
  userTheme: true,
});

/** Re-exported so a form builds its options from the same enum the db stores. */
export const GenderSchema = UserSchema.shape.gender;

/**
 * The generated model mirrors the column types only (a `String` column is just
 * a string), so the product rules - lengths, allowed characters - are layered
 * on here and shared by create and update instead of being written twice.
 *
 * `unwrapNullish` is needed on the optional columns: a constraint cannot be
 * chained onto an already-nullish schema, so each one is unwrapped, bounded,
 * then made nullish again.
 */
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

/** Everything signup asks for. Also the base `RegisterSchema` extends with the password pair. */
export const UserCreateSchema = ValidatedUserFieldsSchema.extend({
  birthdate: BirthdateFormat,
  userTheme: UserModelSchema.shape.userTheme,
});

/**
 * Profile edit. `.partial()` because the endpoint is a PATCH and may carry any
 * subset of the fields. `bio` appears only here: it is editable but not asked
 * for at signup.
 */
export const UserUpdateSchema = ValidatedUserFieldsSchema.extend({
  birthdate: BirthdateFormat,
  userTheme: UserModelSchema.shape.userTheme,
  bio: unwrapNullish(UserModelSchema.shape.bio)
    .max(255, 'Max 255 characters')
    .nullish(),
}).partial();

export type UserDTO = z.infer<typeof UserSchema>;
export type UserPublicProfileDTO = z.infer<typeof UserPublicProfileSchema>;
/** Split because `birthdate` is coerced: the form holds a string, the server gets a `Date`. */
export type UserUpdateInput = z.input<typeof UserUpdateSchema>;
export type UserUpdateDTO = z.output<typeof UserUpdateSchema>;
export type GenderDTO = z.infer<typeof GenderSchema>;
export type UserCreateDTO = z.infer<typeof UserCreateSchema>;
