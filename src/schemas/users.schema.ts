import { type z } from "zod";
import { UserSchema } from "../prisma/schemas/models/User.schema";

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

export const UserProfileUpdateSchema = UserProfileSchema.partial();

export const UserLoginSchema = UserDTOSchema.pick({
  email: true,
});

export type UserDTO = z.infer<typeof UserDTOSchema>;
export type UserProfileDTO = z.infer<typeof UserProfileSchema>;
export type UserLoginDTO = z.infer<typeof UserLoginSchema>;
export type UserProfileUpdateDTO = z.infer<typeof UserProfileUpdateSchema>;
