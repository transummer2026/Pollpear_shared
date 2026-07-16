import * as z from 'zod';
// prettier-ignore
export const OptionInputSchema = z.object({
    id: z.number().int(),
    label: z.string(),
    sliderLeftLabel: z.string().optional().nullable(),
    sliderRightLabel: z.string().optional().nullable(),
    order: z.number().int(),
    isDeleted: z.boolean(),
    pollId: z.number().int(),
    poll: z.unknown(),
    voteOptions: z.array(z.unknown()),
    pollDependencies: z.array(z.unknown()),
    reports: z.array(z.unknown())
}).strict();

export type OptionInputType = z.infer<typeof OptionInputSchema>;
