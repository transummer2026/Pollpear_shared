import * as z from "zod";
// prettier-ignore
export const PollDependencyResultSchema = z.object({
    id: z.number().int(),
    childPollId: z.number().int(),
    optionId: z.number().int(),
    childPoll: z.unknown(),
    option: z.unknown()
}).strict();

export type PollDependencyResultType = z.infer<
  typeof PollDependencyResultSchema
>;
