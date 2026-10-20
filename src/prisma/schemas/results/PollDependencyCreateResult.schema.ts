import * as z from 'zod';
export const PollDependencyCreateResultSchema = z.object({
  childPollId: z.number().int(),
  optionId: z.number().int(),
  childPoll: z.unknown(),
  option: z.unknown()
});