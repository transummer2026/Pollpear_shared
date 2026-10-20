import * as z from 'zod';
// prettier-ignore
export const HashtagResultSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    pollHashtags: z.array(z.unknown()),
    reports: z.array(z.unknown())
}).strict();

export type HashtagResultType = z.infer<typeof HashtagResultSchema>;
