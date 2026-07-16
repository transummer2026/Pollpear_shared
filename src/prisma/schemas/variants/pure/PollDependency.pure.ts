import * as z from 'zod';
// prettier-ignore
export const PollDependencyModelSchema = z.object({
    id: z.number().int(),
    childPollId: z.number().int(),
    optionId: z.number().int(),
    childPoll: z.unknown(),
    option: z.unknown()
}).strict();

export type PollDependencyPureType = z.infer<typeof PollDependencyModelSchema>;
