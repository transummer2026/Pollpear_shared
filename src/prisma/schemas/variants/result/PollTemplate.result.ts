import * as z from 'zod';
// prettier-ignore
export const PollTemplateResultSchema = z.object({
    userId: z.number().int(),
    pollId: z.number().int(),
    user: z.unknown(),
    poll: z.unknown()
}).strict();

export type PollTemplateResultType = z.infer<typeof PollTemplateResultSchema>;
