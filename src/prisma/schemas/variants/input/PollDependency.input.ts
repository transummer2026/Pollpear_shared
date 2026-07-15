import * as z from 'zod';
// prettier-ignore
export const PollDependencyInputSchema = z.object({
    id: z.number().int(),
    childPollId: z.number().int(),
    optionId: z.number().int(),
    childPoll: z.unknown(),
    option: z.unknown()
}).strict();

export type PollDependencyInputType = z.infer<typeof PollDependencyInputSchema>;
