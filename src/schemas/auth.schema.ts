import { z } from "zod";
import { UserLoginSchema, UserRegistrationSchema } from "./users.schema";

export const PasswordFormat = z
      .string()
      .min(12, "Min 12 characters")
      .regex(/[A-Z]/, "Min one capital letter")
      .regex(/[0-9]/, "Min one digit");

export const PasswordFieldsSchema = z.object({
  password: PasswordFormat,
  confirmPassword: z.string(),
});

export const RegisterSchema = z.object({
  ...UserRegistrationSchema.shape,
  ...PasswordFieldsSchema.shape,
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });


export const OauthRegisterSchema = UserRegistrationSchema.omit({
  email: true,
});

export const OauthCompleteSchema = OauthRegisterSchema.extend({
  token: z.uuid("Invalid or missing signup token"),
});

export const OauthPendingSchema = z.object({
  email: z.email("Invalid e-mail"),
  username: z.string(),
  name: z.string().nullable(),
  surname: z.string().nullable(),
  avatarUrl: z.string().nullable(),
});

export const LoginSchema = z.object({
  ...UserLoginSchema.shape,
  email: z.email("Invalid e-mail"),
  password: z
    .string()
    .min(1, "Password required")
});

export const PasswordForgotSchema = z.object({
  ...UserLoginSchema.shape,
  email: z.email("Invalid e-mail"),
});

export const PasswordResetSchema = z.object({
  ...PasswordFieldsSchema.shape,
  token: z.uuid("Invalid or missing reset token"),
})
.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export const VerifyEmailSchema = z.object({
  token: z.uuid("Invalid or missing verification token"),
});

export const ResendVerificationSchema = z.object({
  ...UserLoginSchema.shape,
  email: z.email("Invalid e-mail"),
});

export const UserChangePasswordSchema = z.object({
  ...PasswordFieldsSchema.shape,
  oldPassword: z
    .string()
    .min(1, "Password required"),
})
.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export type LoginDTO = z.infer<typeof LoginSchema>;
export type UserChangePasswordDTO = z.infer<typeof UserChangePasswordSchema>;
export type RegisterInput = z.input<typeof RegisterSchema>;
export type RegisterDTO = z.output<typeof RegisterSchema>;
export type PasswordForgotDTO = z.infer<typeof PasswordForgotSchema>;
export type PasswordResetDTO = z.infer<typeof PasswordResetSchema>;
export type VerifyEmailDTO = z.infer<typeof VerifyEmailSchema>;
export type ResendVerificationDTO = z.infer<typeof ResendVerificationSchema>;
export type OauthRegisterInput = z.input<typeof OauthRegisterSchema>;
export type OauthRegisterDTO = z.output<typeof OauthRegisterSchema>;
export type OauthCompleteInput = z.input<typeof OauthCompleteSchema>;
export type OauthCompleteDTO = z.output<typeof OauthCompleteSchema>;
export type OauthPendingDTO = z.infer<typeof OauthPendingSchema>;
