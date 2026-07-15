import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionWhereInputObjectSchema as OptionWhereInputObjectSchema } from './OptionWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => OptionWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => OptionWhereInputObjectSchema).optional()
}).strict();
export const OptionScalarRelationFilterObjectSchema: z.ZodType<Prisma.OptionScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.OptionScalarRelationFilter>;
export const OptionScalarRelationFilterObjectZodSchema = makeSchema();
