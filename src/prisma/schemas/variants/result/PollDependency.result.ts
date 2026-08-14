import * as z from 'zod';
// prettier-ignore
export const PollDependencyResultSchema = z.object({
    childPollId: z.number().int(),
    optionId: z.number().int(),
    childPoll: z.unknown(),
    option: z.unknown()
}).strict();

export type PollDependencyResultType = z.infer<typeof PollDependencyResultSchema>;
