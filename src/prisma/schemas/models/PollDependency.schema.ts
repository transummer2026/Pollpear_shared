import * as z from "zod";

export const PollDependencySchema = z.object({
  id: z.number().int(),
  childPollId: z.number().int(),
  optionId: z.number().int(),
});

export type PollDependencyType = z.infer<typeof PollDependencySchema>;
