import * as z from "zod";
// prettier-ignore
export const BanAttachmentResultSchema = z.object({
    id: z.number().int(),
    attachmentUrl: z.string(),
    banId: z.number().int(),
    ban: z.unknown()
}).strict();

export type BanAttachmentResultType = z.infer<typeof BanAttachmentResultSchema>;
