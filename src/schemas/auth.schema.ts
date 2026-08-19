import { z } from 'zod';
import { UserCreateSchema } from './users.schema';
import { EmailFormat, PasswordFormat } from './formats.schema';

export const PasswordFieldsSchema = z.object({
  password: PasswordFormat,
  confirmPassword: z.string(),
});

export const RegisterSchema = z
  .object({
    ...UserCreateSchema.shape,
    ...PasswordFieldsSchema.shape,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const LoginSchema = z.object({
  email: EmailFormat,
  password: z.string().min(1, 'Password required'),
});

export const PasswordForgotSchema = z.object({
  email: EmailFormat,
});

export const PasswordResetSchema = z
  .object({
    ...PasswordFieldsSchema.shape,
    token: z.uuid('Invalid or missing reset token'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const UserChangePasswordSchema = z
  .object({
    ...PasswordFieldsSchema.shape,
    oldPassword: z.string().min(1, 'Password required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

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

export type RegisterInput = z.input<typeof RegisterSchema>;
export type RegisterDTO = z.output<typeof RegisterSchema>;
export type LoginDTO = z.infer<typeof LoginSchema>;
export type PasswordForgotDTO = z.infer<typeof PasswordForgotSchema>;
export type PasswordResetDTO = z.infer<typeof PasswordResetSchema>;
export type UserChangePasswordDTO = z.infer<typeof UserChangePasswordSchema>;
export type UserDeleteDTO = z.infer<typeof UserDeleteSchema>;
export type VerifyEmailDTO = z.infer<typeof VerifyEmailSchema>;
export type ResendVerificationDTO = z.infer<typeof ResendVerificationSchema>;
