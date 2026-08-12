import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  keyHash: z.string(),
  appName: z.string().optional(),
  revoked: z.boolean().optional(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ApiKeyUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ApiKeyUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyUncheckedCreateWithoutUserInput>;
export const ApiKeyUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
