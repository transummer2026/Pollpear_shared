import * as z from 'zod';
export const PollDeleteManyResultSchema = z.object({
  count: z.number()
});