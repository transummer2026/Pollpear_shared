import { z } from 'zod';
import { ApiKeySchema as ApiKeyModelSchema } from '../prisma/schemas/models/ApiKey.schema'


export const ApiKeySchema = z.object({
  appName: ApiKeyModelSchema.shape.appName
    .unwrap()
    .trim()
    .min(1, 'Application name required')
    .max(255, 'Max 255 characters'),
});


export const ApiKeyCreateSchema = ApiKeySchema.partial();

export type ApiKeyDTO = z.infer<typeof ApiKeySchema>;
export type ApiKeyCreateDTO = z.infer<typeof ApiKeyCreateSchema>;
