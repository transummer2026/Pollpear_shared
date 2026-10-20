import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionWhereInputObjectSchema as OptionWhereInputObjectSchema } from './OptionWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => OptionWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => OptionWhereInputObjectSchema).optional().nullable()
}).strict();
export const OptionNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.OptionNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.OptionNullableScalarRelationFilter>;
export const OptionNullableScalarRelationFilterObjectZodSchema = makeSchema();
