import * as z from 'zod';

export const VoteScalarFieldEnumSchema = z.enum(['id', 'freeField', 'createdAt', 'updatedAt', 'deletedAt', 'createdById', 'pollId'])

export type VoteScalarFieldEnum = z.infer<typeof VoteScalarFieldEnumSchema>;