import * as z from 'zod';

export const VisibilitySchema = z.enum(['public', 'private'])

export type Visibility = z.infer<typeof VisibilitySchema>;