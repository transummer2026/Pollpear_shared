import * as z from 'zod';
// prettier-ignore
export const OptionInputSchema = z.object({
    id: z.number().int(),
    text: z.string(),
    sliderLeftLabel: z.string().optional().nullable(),
    sliderRightLabel: z.string().optional().nullable(),
    order: z.number().int(),
    deletedAt: z.date().optional().nullable(),
    pollId: z.number().int(),
    poll: z.unknown(),
    voteOptions: z.array(z.unknown())
}).strict();

export type OptionInputType = z.infer<typeof OptionInputSchema>;
