import * as z from 'zod';
// prettier-ignore
export const OptionResultSchema = z.object({
    id: z.number().int(),
    label: z.string(),
    sliderLeftLabel: z.string().nullable(),
    sliderRightLabel: z.string().nullable(),
    order: z.number().int(),
    isDeleted: z.boolean(),
    pollId: z.number().int(),
    poll: z.unknown(),
    voteOptions: z.array(z.unknown()),
    pollDependencies: z.array(z.unknown()),
    reports: z.array(z.unknown())
}).strict();

export type OptionResultType = z.infer<typeof OptionResultSchema>;
