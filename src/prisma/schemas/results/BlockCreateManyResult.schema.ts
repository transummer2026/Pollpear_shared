import * as z from 'zod';
export const BlockCreateManyResultSchema = z.object({
  count: z.number()
});