import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteWhereInputObjectSchema as VoteWhereInputObjectSchema } from './VoteWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => VoteWhereInputObjectSchema).optional(),
  some: z.lazy(() => VoteWhereInputObjectSchema).optional(),
  none: z.lazy(() => VoteWhereInputObjectSchema).optional()
}).strict();
export const VoteListRelationFilterObjectSchema: z.ZodType<Prisma.VoteListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.VoteListRelationFilter>;
export const VoteListRelationFilterObjectZodSchema = makeSchema();
