import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './PollWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => PollWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => PollWhereInputObjectSchema).optional().nullable()
}).strict();
export const PollNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.PollNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PollNullableScalarRelationFilter>;
export const PollNullableScalarRelationFilterObjectZodSchema = makeSchema();
