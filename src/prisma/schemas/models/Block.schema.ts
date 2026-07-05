import * as z from "zod";

export const BlockSchema = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  blockerId: z.number().int(),
  blockedId: z.number().int(),
});

export type BlockType = z.infer<typeof BlockSchema>;
