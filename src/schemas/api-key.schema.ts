import { z } from 'zod';
import { ApiKeySchema as ApiKeyModelSchema } from '../prisma/schemas/models/ApiKey.schema';

export const ApiKeySchema = ApiKeyModelSchema.omit({
  keyHash: true,
  revoked: true,
  updatedAt: true,
  ownerId: true,
  expiredAt: true,
  createdAt: true,
}).extend({
  appName: ApiKeyModelSchema.shape.appName
    .unwrap()
    .trim()
    .min(1, 'Application name required')
    .max(255, 'Max 255 characters'),
  expiredAt: z.coerce.date(),
  createdAt: z.coerce.date(),
});

export const ApiKeyCreateSchema = ApiKeySchema.pick({ appName: true }).partial();

export const ApiKeyCreatedSchema = ApiKeySchema.extend({ key: z.string() });

export type ApiKeyDTO = z.infer<typeof ApiKeySchema>;
export type ApiKeyCreateDTO = z.infer<typeof ApiKeyCreateSchema>;
export type ApiKeyCreatedDTO = z.infer<typeof ApiKeyCreatedSchema>;
