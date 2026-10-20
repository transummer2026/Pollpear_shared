import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { HashtagWhereInputObjectSchema as HashtagWhereInputObjectSchema } from './HashtagWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => HashtagWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => HashtagWhereInputObjectSchema).optional().nullable()
}).strict();
export const HashtagNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.HashtagNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.HashtagNullableScalarRelationFilter>;
export const HashtagNullableScalarRelationFilterObjectZodSchema = makeSchema();
