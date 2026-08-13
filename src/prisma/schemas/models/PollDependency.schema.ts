import * as z from 'zod';

export const PollDependencySchema = z.object({
  childPollId: z.number().int(),
  optionId: z.number().int(),
});

export type PollDependencyType = z.infer<typeof PollDependencySchema>;
