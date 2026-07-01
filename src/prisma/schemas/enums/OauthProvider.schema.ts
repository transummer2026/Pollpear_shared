import * as z from 'zod';

export const OauthProviderSchema = z.enum(['google', 'school42', 'github'])

export type OauthProvider = z.infer<typeof OauthProviderSchema>;