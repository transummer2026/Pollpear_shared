import * as z from 'zod';

export const VoteOptionScalarFieldEnumSchema = z.enum(['voteId', 'optionId'])

export type VoteOptionScalarFieldEnum = z.infer<typeof VoteOptionScalarFieldEnumSchema>;