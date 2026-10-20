import * as z from 'zod';
// prettier-ignore
export const OptionModelSchema = z.object({
    id: z.number().int(),
    text: z.string(),
    sliderLeftLabel: z.string().nullable(),
    sliderRightLabel: z.string().nullable(),
    order: z.number().int(),
    deletedAt: z.date().nullable(),
    pollId: z.number().int(),
    poll: z.unknown(),
    voteOptions: z.array(z.unknown()),
    pollDependencies: z.array(z.unknown()),
    reports: z.array(z.unknown())
}).strict();

export type OptionPureType = z.infer<typeof OptionModelSchema>;
