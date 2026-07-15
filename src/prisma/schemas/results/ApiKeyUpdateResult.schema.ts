import * as z from 'zod';
export const ApiKeyUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  keyHash: z.string(),
  appName: z.string(),
  revoked: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  ownerId: z.number().int(),
  user: z.unknown()
}));