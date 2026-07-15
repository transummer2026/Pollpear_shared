import * as z from 'zod';
export const OptionDeleteManyResultSchema = z.object({
  count: z.number()
});