import { z } from 'zod';
import { MessageSchema as MessageModelSchema } from '../prisma/schemas/models/Message.schema';
import { UserPublicProfileSchema } from './users.schema';

export const MAX_MESSAGE_LENGTH = 4000;

export const MessageReadSchema = MessageModelSchema.pick({
  id: true,
  content: true,
  createdAt: true,
  authorId: true,
  roomId: true,
}).extend({
  author: UserPublicProfileSchema.nullable(),
});

export const MessageCreateSchema = z.object({
  roomId: MessageModelSchema.shape.roomId,
  content: MessageModelSchema.shape.content
    .trim()
    .min(1, 'Message content cannot be empty')
    .max(MAX_MESSAGE_LENGTH, `Max ${MAX_MESSAGE_LENGTH} characters`),
});

export const MESSAGE_PAGE_SIZE = 50;
export const MESSAGE_PAGE_MAX = 200;

export const MessageHistoryQuerySchema = z
  .object({
    before: z.coerce.number().int().positive().optional(),
    after: z.coerce.number().int().positive().optional(),
    limit: z.coerce
      .number()
      .int()
      .positive()
      .max(MESSAGE_PAGE_MAX)
      .default(MESSAGE_PAGE_SIZE),
  })
  .refine((query) => !(query.before && query.after), {
    message: 'before and after are exclusive',
  });

export type MessageReadDTO = z.infer<typeof MessageReadSchema>;
export type MessageCreateDTO = z.infer<typeof MessageCreateSchema>;
export type MessageHistoryQueryDTO = z.infer<typeof MessageHistoryQuerySchema>;
