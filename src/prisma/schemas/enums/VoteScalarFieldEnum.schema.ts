import * as z from 'zod';

export const VoteScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'updatedAt', 'label', 'createdById'])

export type VoteScalarFieldEnum = z.infer<typeof VoteScalarFieldEnumSchema>;