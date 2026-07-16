import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionWhereInputObjectSchema as OptionWhereInputObjectSchema } from './OptionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => OptionWhereInputObjectSchema).optional(),
  some: z.lazy(() => OptionWhereInputObjectSchema).optional(),
  none: z.lazy(() => OptionWhereInputObjectSchema).optional()
}).strict();
export const OptionListRelationFilterObjectSchema: z.ZodType<Prisma.OptionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.OptionListRelationFilter>;
export const OptionListRelationFilterObjectZodSchema = makeSchema();
