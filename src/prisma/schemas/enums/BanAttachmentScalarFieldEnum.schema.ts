import * as z from 'zod';

export const BanAttachmentScalarFieldEnumSchema = z.enum(['id', 'attachmentUrl', 'banId'])

export type BanAttachmentScalarFieldEnum = z.infer<typeof BanAttachmentScalarFieldEnumSchema>;