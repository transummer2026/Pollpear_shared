import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollTemplateWhereInputObjectSchema as PollTemplateWhereInputObjectSchema } from './PollTemplateWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => PollTemplateWhereInputObjectSchema).optional(),
  some: z.lazy(() => PollTemplateWhereInputObjectSchema).optional(),
  none: z.lazy(() => PollTemplateWhereInputObjectSchema).optional()
}).strict();
export const PollTemplateListRelationFilterObjectSchema: z.ZodType<Prisma.PollTemplateListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateListRelationFilter>;
export const PollTemplateListRelationFilterObjectZodSchema = makeSchema();
