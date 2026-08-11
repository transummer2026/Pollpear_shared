import { z } from 'zod';

export const ApiKeyCreateSchema = z.object({
  appName: z
    .string()
    .trim()
    .min(1, 'Required')
    .max(255, 'Max 255 characters')
    .optional(),
});

export type ApiKeyCreateDTO = z.infer<typeof ApiKeyCreateSchema>;
