import * as z from "zod";

export const BanAttachmentSchema = z.object({
  id: z.number().int(),
  attachmentUrl: z.string(),
  banId: z.number().int(),
});

export type BanAttachmentType = z.infer<typeof BanAttachmentSchema>;
