import * as z from 'zod';

export const PollScalarFieldEnumSchema = z.enum(['id', 'title', 'description', 'type', 'visibility', 'allowChangeVote', 'isAnonymous', 'status', 'publishedAt', 'endsAt', 'createdAt', 'updatedAt', 'deletedAt', 'createdById', 'roomId'])

export type PollScalarFieldEnum = z.infer<typeof PollScalarFieldEnumSchema>;