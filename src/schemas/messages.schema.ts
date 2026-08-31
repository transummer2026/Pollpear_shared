import { z } from 'zod';
import { MessageSchema as MessageModelSchema } from '../prisma/schemas/models/Message.schema';
import { UserPublicProfileSchema } from './users.schema';

/** Exported so the composer counts against the same limit the API enforces. */
export const MAX_MESSAGE_LENGTH = 4000;

/**
 * A chat message as returned or broadcast. Built with `pick` rather than
 * `omit` on purpose: this payload is pushed to every member of the room, so a
 * column later added to Message stays out of it until someone lists it here.
 */
export const MessageReadSchema = MessageModelSchema.pick({
  id: true,
  content: true,
  createdAt: true,
  authorId: true,
  roomId: true,
}).extend({
  author: UserPublicProfileSchema.nullable(),
});

/** `.trim()` runs before the length checks, so whitespace alone is rejected. */
export const MessageCreateSchema = z.object({
  roomId: MessageModelSchema.shape.roomId,
  content: MessageModelSchema.shape.content
    .trim()
    .min(1, 'Message content cannot be empty')
    .max(MAX_MESSAGE_LENGTH, `Max ${MAX_MESSAGE_LENGTH} characters`),
});

export const MESSAGE_PAGE_SIZE = 50;
export const MESSAGE_PAGE_MAX = 200;

/**
 * Cursor pagination over message ids rather than offsets, so a message posted
 * mid-scroll does not shift the window and duplicate a row: `before` walks
 * back through history, `after` catches up on what arrived since.
 *
 * They are mutually exclusive - a request carrying both describes no single
 * page - and `limit` is capped at MESSAGE_PAGE_MAX so a client cannot ask for
 * a whole room in one call.
 */
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
