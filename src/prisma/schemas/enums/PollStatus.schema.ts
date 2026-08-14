import * as z from 'zod';

export const PollStatusSchema = z.enum(['pending', 'active', 'closed'])

export type PollStatus = z.infer<typeof PollStatusSchema>;