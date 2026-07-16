import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { HashtagWhereInputObjectSchema as HashtagWhereInputObjectSchema } from './HashtagWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => HashtagWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => HashtagWhereInputObjectSchema).optional()
}).strict();
export const HashtagScalarRelationFilterObjectSchema: z.ZodType<Prisma.HashtagScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.HashtagScalarRelationFilter>;
export const HashtagScalarRelationFilterObjectZodSchema = makeSchema();
