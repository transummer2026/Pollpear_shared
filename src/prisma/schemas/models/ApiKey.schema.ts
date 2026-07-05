import * as z from "zod";

export const ApiKeySchema = z.object({
  id: z.number().int(),
  keyHash: z.string(),
  appName: z.string(),
  revoked: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  ownerId: z.number().int(),
});

export type ApiKeyType = z.infer<typeof ApiKeySchema>;
