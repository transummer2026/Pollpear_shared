import * as z from 'zod';
// prettier-ignore
export const BanAttachmentModelSchema = z.object({
    id: z.number().int(),
    attachmentUrl: z.string(),
    banId: z.number().int(),
    ban: z.unknown()
}).strict();

export type BanAttachmentPureType = z.infer<typeof BanAttachmentModelSchema>;
