import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  blockedId: z.number().int()
}).strict();
export const BlockUncheckedCreateWithoutBlockerInputObjectSchema: z.ZodType<Prisma.BlockUncheckedCreateWithoutBlockerInput> = makeSchema() as unknown as z.ZodType<Prisma.BlockUncheckedCreateWithoutBlockerInput>;
export const BlockUncheckedCreateWithoutBlockerInputObjectZodSchema = makeSchema();
