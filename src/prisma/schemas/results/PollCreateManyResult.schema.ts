import * as z from 'zod';
export const PollCreateManyResultSchema = z.object({
  count: z.number()
});