import * as z from 'zod';

export const ReportScalarFieldEnumSchema = z.enum(['id', 'reason', 'content', 'createdAt', 'updatedAt', 'reporterId', 'reportedId', 'roomId', 'messageId', 'pollId', 'optionId', 'hashtagId'])

export type ReportScalarFieldEnum = z.infer<typeof ReportScalarFieldEnumSchema>;