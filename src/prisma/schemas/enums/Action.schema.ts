import * as z from 'zod';

export const ActionSchema = z.enum(['manage', 'create', 'read', 'update', 'delete'])

export type Action = z.infer<typeof ActionSchema>;