import * as z from 'zod';
export const OptionCreateManyResultSchema = z.object({
  count: z.number()
});