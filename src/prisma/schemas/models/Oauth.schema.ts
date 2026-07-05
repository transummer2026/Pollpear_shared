import * as z from "zod";
import { GrantTypeSchema } from "../enums/GrantType.schema";
import { OauthProviderSchema } from "../enums/OauthProvider.schema";

export const OauthSchema = z.object({
  id: z.number().int(),
  provider: OauthProviderSchema,
  providerUserId: z.string(),
  providerUrl: z.string(),
  accessToken: z.string(),
  refreshToken: z.string(),
  tokenType: z.string(),
  expiresAt: z.date(),
  scope: z.string(),
  grantType: GrantTypeSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.number().int(),
});

export type OauthType = z.infer<typeof OauthSchema>;
