import * as z from 'zod';

export const MessageScalarFieldEnumSchema = z.enum(['id', 'content', 'createdAt', 'updatedAt', 'deletedAt', 'authorId', 'roomId'])

export type MessageScalarFieldEnum = z.infer<typeof MessageScalarFieldEnumSchema>;