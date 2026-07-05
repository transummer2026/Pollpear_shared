import * as z from "zod";
// prettier-ignore
export const PollHashtagResultSchema = z.object({
    pollId: z.number().int(),
    hashtagId: z.number().int(),
    poll: z.unknown(),
    hashtag: z.unknown()
}).strict();

export type PollHashtagResultType = z.infer<typeof PollHashtagResultSchema>;
