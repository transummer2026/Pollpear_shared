import * as z from 'zod';
export const ApiKeyCreateResultSchema = z.object({
  id: z.number().int(),
  keyHash: z.string(),
  appName: z.string(),
  revoked: z.boolean(),
  expiredAt: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
  ownerId: z.number().int(),
  user: z.unknown()
});