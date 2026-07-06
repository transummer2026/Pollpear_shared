import * as z from "zod";
// prettier-ignore
export const HashtagModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    isVisible: z.boolean(),
    pollHashtags: z.array(z.unknown()),
    reports: z.array(z.unknown())
}).strict();

export type HashtagPureType = z.infer<typeof HashtagModelSchema>;
