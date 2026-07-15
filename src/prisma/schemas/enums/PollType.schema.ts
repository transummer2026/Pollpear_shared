import * as z from 'zod';

export const PollTypeSchema = z.enum(['single_choice', 'multiple_choice', 'slider', 'free_field'])

export type PollType = z.infer<typeof PollTypeSchema>;