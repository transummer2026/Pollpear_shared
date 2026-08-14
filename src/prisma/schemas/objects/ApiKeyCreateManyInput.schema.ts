import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  keyHash: z.string().max(255),
  appName: z.string().max(255).optional(),
  revoked: z.boolean().optional(),
  expiredAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ownerId: z.number().int()
}).strict();
export const ApiKeyCreateManyInputObjectSchema: z.ZodType<Prisma.ApiKeyCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyCreateManyInput>;
export const ApiKeyCreateManyInputObjectZodSchema = makeSchema();
