import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionWhereInputObjectSchema as VoteOptionWhereInputObjectSchema } from './VoteOptionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => VoteOptionWhereInputObjectSchema).optional(),
  some: z.lazy(() => VoteOptionWhereInputObjectSchema).optional(),
  none: z.lazy(() => VoteOptionWhereInputObjectSchema).optional()
}).strict();
export const VoteOptionListRelationFilterObjectSchema: z.ZodType<Prisma.VoteOptionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionListRelationFilter>;
export const VoteOptionListRelationFilterObjectZodSchema = makeSchema();
