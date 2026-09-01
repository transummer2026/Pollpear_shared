import * as z from 'zod';
// prettier-ignore
export const MessageResultSchema = z.object({
    id: z.number().int(),
    content: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    authorId: z.number().int(),
    roomId: z.number().int(),
    author: z.unknown(),
    room: z.unknown()
}).strict();

export type MessageResultType = z.infer<typeof MessageResultSchema>;
