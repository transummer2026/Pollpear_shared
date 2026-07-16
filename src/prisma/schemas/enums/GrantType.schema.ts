import * as z from 'zod';

export const GrantTypeSchema = z.enum(['client_credentials'])

export type GrantType = z.infer<typeof GrantTypeSchema>;