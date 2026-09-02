import * as z from 'zod';
// prettier-ignore
export const BanAttachmentInputSchema = z.object({
    id: z.number().int(),
    attachmentUrl: z.string(),
    banId: z.number().int(),
    ban: z.unknown()
}).strict();

export type BanAttachmentInputType = z.infer<typeof BanAttachmentInputSchema>;
