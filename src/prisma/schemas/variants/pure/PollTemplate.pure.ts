import * as z from 'zod';
// prettier-ignore
export const PollTemplateModelSchema = z.object({
    userId: z.number().int(),
    pollId: z.number().int(),
    user: z.unknown(),
    poll: z.unknown()
}).strict();

export type PollTemplatePureType = z.infer<typeof PollTemplateModelSchema>;
