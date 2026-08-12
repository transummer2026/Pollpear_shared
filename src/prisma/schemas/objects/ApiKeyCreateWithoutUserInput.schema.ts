import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  keyHash: z.string().max(255),
  appName: z.string().max(255).optional(),
  revoked: z.boolean().optional(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ApiKeyCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ApiKeyCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyCreateWithoutUserInput>;
export const ApiKeyCreateWithoutUserInputObjectZodSchema = makeSchema();
