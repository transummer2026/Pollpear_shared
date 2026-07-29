import * as z from 'zod';

export const PollStatusSchema = z.enum(['pending', 'active', 'locked', 'deleted'])

export type PollStatus = z.infer<typeof PollStatusSchema>;