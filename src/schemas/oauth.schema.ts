import { z } from 'zod';
import { UserSchema as UserModelSchema } from '../prisma/schemas/models/User.schema';
import { UserCreateSchema } from './users.schema';
import { EmailFormat } from './formats.schema';

export const OauthRegisterSchema = UserCreateSchema.omit({
  email: true,
});

export const OauthCompleteSchema = OauthRegisterSchema.extend({
  token: z.uuid('Invalid or missing signup token'),
});

export const OauthPendingSchema = z.object({
  email: EmailFormat,
  username: UserModelSchema.shape.username,
  name: UserModelSchema.shape.name.unwrap(),
  surname: UserModelSchema.shape.surname.unwrap(),
  avatarUrl: UserModelSchema.shape.avatarUrl.unwrap().nullable(),
});

export type OauthRegisterInput = z.input<typeof OauthRegisterSchema>;
export type OauthRegisterDTO = z.output<typeof OauthRegisterSchema>;
export type OauthCompleteInput = z.input<typeof OauthCompleteSchema>;
export type OauthCompleteDTO = z.output<typeof OauthCompleteSchema>;
export type OauthPendingDTO = z.infer<typeof OauthPendingSchema>;
