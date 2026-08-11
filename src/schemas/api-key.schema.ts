import { z } from 'zod';


export const ApiKeySchema = z.object({
  appName: z
    .string()
    .trim()
    .min(1, 'Required')
    .max(255, 'Max 255 characters'),
});

export type ApiKeyDTO = z.infer<typeof ApiKeySchema>;

export const ApiKeyCreateSchema = ApiKeySchema.partial();

export type ApiKeyCreateDTO = z.infer<typeof ApiKeyCreateSchema>;
