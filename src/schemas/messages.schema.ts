import { z } from 'zod';
import { MessageSchema as MessageModelSchema } from '../prisma/schemas/models/Message.schema';

export const MessageSchema = z.object({
  content: MessageModelSchema.shape.content.min(
    1,
    'Message content cannot be empty',
  ),
  authorId: MessageModelSchema.shape.authorId,
  roomId: MessageModelSchema.shape.roomId,
});

export type MessageDTO = z.infer<typeof MessageSchema>;
