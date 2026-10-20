import * as z from 'zod';
export const BanAttachmentCreateResultSchema = z.object({
  id: z.number().int(),
  attachmentUrl: z.string(),
  banId: z.number().int(),
  ban: z.unknown()
});