import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './PollWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => PollWhereInputObjectSchema).optional(),
  some: z.lazy(() => PollWhereInputObjectSchema).optional(),
  none: z.lazy(() => PollWhereInputObjectSchema).optional()
}).strict();
export const PollListRelationFilterObjectSchema: z.ZodType<Prisma.PollListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PollListRelationFilter>;
export const PollListRelationFilterObjectZodSchema = makeSchema();
