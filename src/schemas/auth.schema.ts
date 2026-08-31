import { z } from 'zod';
import { UserCreateSchema } from './users.schema';
import { EmailFormat, PasswordFormat } from './formats.schema';

/**
 * A password and its confirmation, shared by the three flows that set one.
 *
 * The equality check is not part of this object: it has to run on the composed
 * schema, so each flow repeats the same `.refine()` with
 * `path: ['confirmPassword']` to land the error on the field the user has to
 * fix rather than at the root of the form.
 */
export const PasswordFieldsSchema = z.object({
  password: PasswordFormat,
  confirmPassword: z.string(),
});

/** Signup: the profile fields plus the password pair, validated together. */
export const RegisterSchema = z
  .object({
    ...UserCreateSchema.shape,
    ...PasswordFieldsSchema.shape,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

/**
 * Login deliberately does not reuse `PasswordFormat`: the submitted value is
 * checked against the stored hash, not against the current policy, so an
 * account created under older rules can still sign in.
 */
export const LoginSchema = z.object({
  email: EmailFormat,
  password: z.string().min(1, 'Password required'),
});

export const PasswordForgotSchema = z.object({
  email: EmailFormat,
});

/** Reset from an e-mailed link: the new password plus the token that authorises it. */
export const PasswordResetSchema = z
  .object({
    ...PasswordFieldsSchema.shape,
    token: z.uuid('Invalid or missing reset token'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

/** Change from inside the account: proof of the old password stands in for the token. */
export const UserChangePasswordSchema = z
  .object({
    ...PasswordFieldsSchema.shape,
    oldPassword: z.string().min(1, 'Password required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

/**
 * Exported so the UI prompts for the exact phrase the schema requires; keeping
 * them in one constant stops the label and the check from drifting apart.
 */
export const DELETE_ACCOUNT_CONFIRMATION_PHRASE = 'CONFIRMED';

export const UserDeleteSchema = z.object({
  confirmation: z.literal(DELETE_ACCOUNT_CONFIRMATION_PHRASE, {
    error: `Type ${DELETE_ACCOUNT_CONFIRMATION_PHRASE} to confirm`,
  }),
});

export const VerifyEmailSchema = z.object({
  token: z.uuid('Invalid or missing verification token'),
});

export const ResendVerificationSchema = z.object({
  email: EmailFormat,
});

/**
 * Register is the one flow that coerces (`birthdate`), so input and output
 * differ - a form holds the string, the server receives a `Date`. The others
 * parse to the shape they were given and use a single `z.infer`.
 */
export type RegisterInput = z.input<typeof RegisterSchema>;
export type RegisterDTO = z.output<typeof RegisterSchema>;
export type LoginDTO = z.infer<typeof LoginSchema>;
export type PasswordForgotDTO = z.infer<typeof PasswordForgotSchema>;
export type PasswordResetDTO = z.infer<typeof PasswordResetSchema>;
export type UserChangePasswordDTO = z.infer<typeof UserChangePasswordSchema>;
export type UserDeleteDTO = z.infer<typeof UserDeleteSchema>;
export type VerifyEmailDTO = z.infer<typeof VerifyEmailSchema>;
export type ResendVerificationDTO = z.infer<typeof ResendVerificationSchema>;
