import * as z from "zod";
// prettier-ignore
export const BanAttachmentInputSchema = z.object({
    attachmentUrl: z.string(),
    banId: z.number().int(),
    ban: z.unknown()
}).strict();

export type BanAttachmentInputType = z.infer<typeof BanAttachmentInputSchema>;
