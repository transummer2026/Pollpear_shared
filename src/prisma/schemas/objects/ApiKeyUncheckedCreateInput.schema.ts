import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  keyHash: z.string().max(255),
  appName: z.string().max(255).optional(),
  revoked: z.boolean().optional(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  ownerId: z.number().int()
}).strict();
export const ApiKeyUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ApiKeyUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyUncheckedCreateInput>;
export const ApiKeyUncheckedCreateInputObjectZodSchema = makeSchema();
