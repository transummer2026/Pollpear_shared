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
  email: emptyToUndefined(UserProfileSchema.shape.email),
  birthdate: emptyToUndefined(
    z.coerce
      .date({ error: "Enter your birthdate" })
      .min(new Date("1900-01-01"), { error: "Too old!" })
  ),
  nationality: emptyToUndefined(UserProfileSchema.shape.nationality),
  name: emptyToUndefined(UserProfileSchema.shape.name),
  surname: emptyToUndefined(UserProfileSchema.shape.surname),
  city: emptyToUndefined(UserProfileSchema.shape.city),
  state: emptyToUndefined(UserProfileSchema.shape.state),
  country: emptyToUndefined(UserProfileSchema.shape.country),
  company: emptyToUndefined(UserProfileSchema.shape.company),
  userTheme: UserDTOSchema.shape.userTheme.optional(),
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