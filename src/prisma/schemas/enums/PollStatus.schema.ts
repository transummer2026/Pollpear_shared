import * as z from 'zod';

export const PollStatusSchema = z.enum(['active', 'draft', 'locked', 'archived'])

export type PollStatus = z.infer<typeof PollStatusSchema>;