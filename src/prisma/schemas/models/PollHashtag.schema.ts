import * as z from "zod";

export const PollHashtagSchema = z.object({
  pollId: z.number().int(),
  hashtagId: z.number().int(),
});

export type PollHashtagType = z.infer<typeof PollHashtagSchema>;
