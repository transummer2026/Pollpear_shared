import * as z from 'zod';
import { OauthProviderSchema } from '../../enums/OauthProvider.schema';
import { GrantTypeSchema } from '../../enums/GrantType.schema';
// prettier-ignore
export const OauthInputSchema = z.object({
    provider: OauthProviderSchema,
    providerUserId: z.string(),
    providerUrl: z.string(),
    accessToken: z.string(),
    refreshToken: z.string(),
    tokenType: z.string(),
    expiresAt: z.date(),
    scope: z.string(),
    grantType: GrantTypeSchema,
    userId: z.number().int(),
    user: z.unknown()
}).strict();

export type OauthInputType = z.infer<typeof OauthInputSchema>;
