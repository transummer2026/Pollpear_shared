import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollDependencyWhereInputObjectSchema as PollDependencyWhereInputObjectSchema } from './PollDependencyWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => PollDependencyWhereInputObjectSchema).optional(),
  some: z.lazy(() => PollDependencyWhereInputObjectSchema).optional(),
  none: z.lazy(() => PollDependencyWhereInputObjectSchema).optional()
}).strict();
export const PollDependencyListRelationFilterObjectSchema: z.ZodType<Prisma.PollDependencyListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyListRelationFilter>;
export const PollDependencyListRelationFilterObjectZodSchema = makeSchema();
