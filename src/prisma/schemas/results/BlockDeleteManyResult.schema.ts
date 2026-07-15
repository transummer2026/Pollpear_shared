import * as z from 'zod';
export const BlockDeleteManyResultSchema = z.object({
  count: z.number()
});