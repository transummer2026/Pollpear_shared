import { z } from "zod";
import { UserSchema } from "../prisma/schemas/models/User.schema";

const emptyToUndefined = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess((val) => (val === "" ? undefined : val), schema.optional());

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

export const UserProfileUpdateSchema = UserProfileSchema.extend({
  birthdate: 
    z.coerce
      .date({ error: "Enter your birthdate" })
      .min(new Date("1900-01-01"), { error: "Too old!" }),
}).partial();

export const UserLoginSchema = UserDTOSchema.pick({
  email: true,
});

export const GenderSchema = UserDTOSchema.shape.gender;


export type UserDTO = z.infer<typeof UserDTOSchema>;
export type UserProfileDTO = z.infer<typeof UserProfileSchema>;
export type UserLoginDTO = z.infer<typeof UserLoginSchema>;
export type UserProfileUpdateInput = z.input<typeof UserProfileUpdateSchema>;
export type UserProfileUpdateDTO = z.output<typeof UserProfileUpdateSchema>;
export type GenderDTO = z.infer<typeof GenderSchema>;