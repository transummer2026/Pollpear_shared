import * as z from 'zod';

export const OptionSchema = z.object({
  id: z.number().int(),
  text: z.string(),
  sliderLeftLabel: z.string().nullish(),
  sliderRightLabel: z.string().nullish(),
  order: z.number().int(),
  deletedAt: z.date().nullish(),
  pollId: z.number().int(),
});

export type OptionType = z.infer<typeof OptionSchema>;
