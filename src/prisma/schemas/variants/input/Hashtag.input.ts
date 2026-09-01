import * as z from 'zod';
// prettier-ignore
export const HashtagInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable(),
    pollHashtags: z.array(z.unknown())
}).strict();

export type HashtagInputType = z.infer<typeof HashtagInputSchema>;
