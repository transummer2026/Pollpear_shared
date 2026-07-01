import * as z from 'zod';

export const PollTemplateSchema = z.object({
  userId: z.number().int(),
  pollId: z.number().int(),
});

export type PollTemplateType = z.infer<typeof PollTemplateSchema>;
