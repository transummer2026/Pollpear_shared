import * as z from 'zod';

export const PollHashtagScalarFieldEnumSchema = z.enum(['pollId', 'hashtagId'])

export type PollHashtagScalarFieldEnum = z.infer<typeof PollHashtagScalarFieldEnumSchema>;