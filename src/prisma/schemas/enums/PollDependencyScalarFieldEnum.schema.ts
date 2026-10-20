import * as z from 'zod';

export const PollDependencyScalarFieldEnumSchema = z.enum(['childPollId', 'optionId'])

export type PollDependencyScalarFieldEnum = z.infer<typeof PollDependencyScalarFieldEnumSchema>;