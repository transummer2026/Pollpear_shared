import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  blockerId: z.number().int()
}).strict();
export const BlockCreateManyBlockedInputObjectSchema: z.ZodType<Prisma.BlockCreateManyBlockedInput> = makeSchema() as unknown as z.ZodType<Prisma.BlockCreateManyBlockedInput>;
export const BlockCreateManyBlockedInputObjectZodSchema = makeSchema();
