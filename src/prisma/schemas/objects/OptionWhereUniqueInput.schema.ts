import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const OptionWhereUniqueInputObjectSchema: z.ZodType<Prisma.OptionWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionWhereUniqueInput>;
export const OptionWhereUniqueInputObjectZodSchema = makeSchema();
