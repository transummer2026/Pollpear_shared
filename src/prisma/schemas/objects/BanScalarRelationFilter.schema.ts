import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanWhereInputObjectSchema as BanWhereInputObjectSchema } from './BanWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => BanWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => BanWhereInputObjectSchema).optional()
}).strict();
export const BanScalarRelationFilterObjectSchema: z.ZodType<Prisma.BanScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BanScalarRelationFilter>;
export const BanScalarRelationFilterObjectZodSchema = makeSchema();
