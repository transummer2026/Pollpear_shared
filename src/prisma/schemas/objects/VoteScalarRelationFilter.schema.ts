import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteWhereInputObjectSchema as VoteWhereInputObjectSchema } from './VoteWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => VoteWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => VoteWhereInputObjectSchema).optional()
}).strict();
export const VoteScalarRelationFilterObjectSchema: z.ZodType<Prisma.VoteScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.VoteScalarRelationFilter>;
export const VoteScalarRelationFilterObjectZodSchema = makeSchema();
