import { z } from "zod";
import { UserSchema } from "../prisma/schemas/models/User.schema";
import { UserThemeSchema } from "../prisma/schemas/enums/UserTheme.schema";

export const BirthdateFormat = z.coerce
  .date({ error: "Enter your birthdate" })
  .min(new Date("1900-01-01"), { error: "Too old!" });

export const UserDTOSchema = UserSchema.omit({
  passwordHash: true,
  updatedAt: true,
});

export const UserProfileSchema = UserDTOSchema.omit({
  id: true,
  role: true,
  score: true,
  isOnline: true,
  isDeleted: true,
  visibility: true,
  deletedAt: true,
  lastSeenAt: true,
  avatarUrl: true,
  bannerUrl: true,
  createdAt: true,
  userTheme: true,
});

export const GenderSchema = UserDTOSchema.shape.gender;

export const UserRegistrationSchema = z.object({
  username: z.string()
    .min(5, "Min 5 characters")
    .max(32, "Max 32 characters")
    .regex(/^[\w.]+$/, ""),
  email: z.email("Invalid e-mail"),
  birthdate: BirthdateFormat,
  nationality: z.string()
    .min(3, "Min 3 characters")
    .max(20, "Max 20 characters")
    .regex(/^[a-zA-Z]{2,15}(\-?\s?[a-zA-Z]{1,10})?$/, "Only letters"),
  gender: z.enum(GenderSchema.options, { error: "Select a gender" }),
  name: z.string().max(255, "Max 255 characters").optional(),
  surname: z.string().max(255, "Max 255 characters").optional(),
  city: z.string().max(255, "Max 255 characters").optional(),
  state: z.string().max(255, "Max 255 characters").optional(),
  country: z.string().max(255, "Max 255 characters").optional(),
  company: z.string().max(255, "Max 255 characters").optional(),
  userTheme: UserThemeSchema.default("light"),
});

export const UserProfileUpdateSchema = UserProfileSchema.extend({
  birthdate: BirthdateFormat,
  userTheme: UserDTOSchema.shape.userTheme,
}).partial();

export const UserLoginSchema = UserDTOSchema.pick({
  email: true,
});

export type UserDTO = z.infer<typeof UserDTOSchema>;
export type UserProfileDTO = z.infer<typeof UserProfileSchema>;
export type UserLoginDTO = z.infer<typeof UserLoginSchema>;
export type UserProfileUpdateInput = z.input<typeof UserProfileUpdateSchema>;
export type UserProfileUpdateDTO = z.output<typeof UserProfileUpdateSchema>;
export type GenderDTO = z.infer<typeof GenderSchema>;
export type UserRegistrationDTO = z.infer<typeof UserRegistrationSchema>;