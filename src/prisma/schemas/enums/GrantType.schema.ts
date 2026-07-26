import * as z from 'zod';

export const GrantTypeSchema = z.enum(['client_credentials', 'authorization_code'])

export type GrantType = z.infer<typeof GrantTypeSchema>;