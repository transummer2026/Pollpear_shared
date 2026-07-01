import * as z from 'zod';
import { OauthProviderSchema } from '../../enums/OauthProvider.schema';
import { GrantTypeSchema } from '../../enums/GrantType.schema';
// prettier-ignore
export const OauthModelSchema = z.object({
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
    user: z.unknown()
}).strict();

export type OauthPureType = z.infer<typeof OauthModelSchema>;
