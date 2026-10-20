import * as z from 'zod';
// prettier-ignore
export const PollTemplateInputSchema = z.object({
    userId: z.number().int(),
    pollId: z.number().int(),
    user: z.unknown(),
    poll: z.unknown()
}).strict();

export type PollTemplateInputType = z.infer<typeof PollTemplateInputSchema>;
