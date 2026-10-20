import * as z from 'zod';
export const BanAttachmentFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  attachmentUrl: z.string(),
  banId: z.number().int(),
  ban: z.unknown()
}));