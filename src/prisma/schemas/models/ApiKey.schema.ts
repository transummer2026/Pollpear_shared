import * as z from 'zod';

export const ApiKeySchema = z.object({
  id: z.number().int(),
  keyHash: z.string(),
  appName: z.string().default("default"),
  revoked: z.boolean(),
  expiresAt: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
  ownerId: z.number().int(),
});

export type ApiKeyType = z.infer<typeof ApiKeySchema>;
