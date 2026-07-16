import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './PollWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => PollWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => PollWhereInputObjectSchema).optional()
}).strict();
export const PollScalarRelationFilterObjectSchema: z.ZodType<Prisma.PollScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PollScalarRelationFilter>;
export const PollScalarRelationFilterObjectZodSchema = makeSchema();
