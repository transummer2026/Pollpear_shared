import { z } from "zod";
import { GenderSchema, UserProfileSchema, UserLoginSchema } from "./users.schema";

export const PasswordFormat = z
      .string()
      .min(12, "Min 12 characters")
      .regex(/[A-Z]/, "Min one capital letter")
      .regex(/[0-9]/, "Min one digit");

export const RegisterSchema = z
  .object({
    ...UserProfileSchema.shape,
    username: UserProfileSchema.shape.username
      .min(5, "Min 5 characters")
      .max(32, "Max 32 characters")
      .regex(/^[\w.]+$/, ""),
    email: z.email("Invalid e-mail"),
    password: PasswordFormat,
    confirmPassword: z.string(),
    birthdate: z.coerce
      .date({ error: "Enter your birthdate" })
      .min(new Date("1900-01-01"), { error: "Too old!" }),
    nationality: UserProfileSchema.shape.nationality
      .min(3, "Min 3 characters")
      .max(20, "Max 20 characters")
      .regex(/^[a-zA-Z]{2,15}(\-?\s?[a-zA-Z]{1,10})?$/, "Only letters"),
    gender: z.enum(GenderSchema.options, { error: "Select a gender" }),
    name: UserProfileSchema.shape.name
      .unwrap()
      .unwrap()
      .max(255, "Max 255 characters")
      .optional(),
    surname: UserProfileSchema.shape.surname
      .unwrap()
      .unwrap()
      .max(255, "Max 255 characters")
      .optional(),
    city: UserProfileSchema.shape.city
      .unwrap()
      .unwrap()
      .max(255, "Max 255 characters")
      .optional(),
    state: UserProfileSchema.shape.state
      .unwrap()
      .unwrap()
      .max(255, "Max 255 characters")
      .optional(),
    country: UserProfileSchema.shape.country
      .unwrap()
      .unwrap()
      .max(255, "Max 255 characters")
      .optional(),
    company: UserProfileSchema.shape.company
      .unwrap()
      .unwrap()
      .max(255, "Max 255 characters")
      .optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    // the password is doubke checked here
    message: "Passwords do not match",
    path: ["confirmPassword"],
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

export const PasswordFieldsSchema = z.object({
  password: PasswordFormat,
  confirmPassword: z.string(),
});

export const PasswordResetSchema = z.object({
  ...PasswordFieldsSchema.shape,
  token: z.uuid("Invalid or missing reset token"),
})
.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
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
