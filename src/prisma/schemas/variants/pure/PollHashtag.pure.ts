import * as z from "zod";
// prettier-ignore
export const PollHashtagModelSchema = z.object({
    pollId: z.number().int(),
    hashtagId: z.number().int(),
    poll: z.unknown(),
    hashtag: z.unknown()
}).strict();

export type PollHashtagPureType = z.infer<typeof PollHashtagModelSchema>;
