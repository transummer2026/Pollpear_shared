import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BlockWhereInputObjectSchema as BlockWhereInputObjectSchema } from './BlockWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => BlockWhereInputObjectSchema).optional(),
  some: z.lazy(() => BlockWhereInputObjectSchema).optional(),
  none: z.lazy(() => BlockWhereInputObjectSchema).optional()
}).strict();
export const BlockListRelationFilterObjectSchema: z.ZodType<Prisma.BlockListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BlockListRelationFilter>;
export const BlockListRelationFilterObjectZodSchema = makeSchema();
