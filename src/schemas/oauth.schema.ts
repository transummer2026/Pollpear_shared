import { z } from 'zod';
import { UserSchema as UserModelSchema } from '../prisma/schemas/models/User.schema';
import { UserCreateSchema } from './users.schema';
import { EmailFormat } from './formats.schema';

/**
 * Finishing a signup that started with an OAuth handshake: the same fields as
 * a normal signup, minus `email`. The address comes from the provider's
 * verified profile, so letting the client send one would let it claim an
 * address it never proved.
 */
export const OauthRegisterSchema = UserCreateSchema.omit({
  email: true,
});

/** The submitted form plus the short-lived token tying it to the pending handshake. */
export const OauthCompleteSchema = OauthRegisterSchema.extend({
  token: z.uuid('Invalid or missing signup token'),
});

/**
 * The provider profile held server-side between the callback and the completed
 * signup, handed back to prefill the form.
 *
 * The optional columns are unwrapped to nullable: the provider always answers
 * for these fields, sometimes with nothing, so the key is present and may be
 * null rather than being absent.
 */
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
