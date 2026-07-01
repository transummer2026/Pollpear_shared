import * as z from 'zod';
// prettier-ignore
export const HashtagInputSchema = z.object({
    name: z.string(),
    isVisible: z.boolean(),
    pollHashtags: z.array(z.unknown()),
    reports: z.array(z.unknown())
}).strict();

export type HashtagInputType = z.infer<typeof HashtagInputSchema>;
