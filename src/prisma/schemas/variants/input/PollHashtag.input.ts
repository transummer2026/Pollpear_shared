import * as z from "zod";
// prettier-ignore
export const PollHashtagInputSchema = z.object({
    pollId: z.number().int(),
    hashtagId: z.number().int(),
    poll: z.unknown(),
    hashtag: z.unknown()
}).strict();

export type PollHashtagInputType = z.infer<typeof PollHashtagInputSchema>;
