import * as z from 'zod';

export const PollScalarFieldEnumSchema = z.enum(['id', 'title', 'description', 'type', 'createdAt', 'publishedAt', 'updatedAt', 'endsAt', 'visibility', 'allowChangeVote', 'isAnonymous', 'status', 'createdById', 'roomId'])

export type PollScalarFieldEnum = z.infer<typeof PollScalarFieldEnumSchema>;