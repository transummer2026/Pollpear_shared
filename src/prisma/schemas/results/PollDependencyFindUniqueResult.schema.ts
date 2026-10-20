import * as z from 'zod';
export const PollDependencyFindUniqueResultSchema = z.nullable(z.object({
  childPollId: z.number().int(),
  optionId: z.number().int(),
  childPoll: z.unknown(),
  option: z.unknown()
}));