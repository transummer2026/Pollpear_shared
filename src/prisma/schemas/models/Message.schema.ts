import * as z from "zod";

export const MessageSchema = z.object({
  id: z.number().int(),
  content: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
  authorId: z.number().int(),
  roomId: z.number().int(),
});

export type MessageType = z.infer<typeof MessageSchema>;
