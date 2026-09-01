import * as z from 'zod';
// prettier-ignore
export const HashtagModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    pollHashtags: z.array(z.unknown())
}).strict();

export type HashtagPureType = z.infer<typeof HashtagModelSchema>;
