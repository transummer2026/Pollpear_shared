import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollHashtagWhereInputObjectSchema as PollHashtagWhereInputObjectSchema } from './PollHashtagWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => PollHashtagWhereInputObjectSchema).optional(),
  some: z.lazy(() => PollHashtagWhereInputObjectSchema).optional(),
  none: z.lazy(() => PollHashtagWhereInputObjectSchema).optional()
}).strict();
export const PollHashtagListRelationFilterObjectSchema: z.ZodType<Prisma.PollHashtagListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagListRelationFilter>;
export const PollHashtagListRelationFilterObjectZodSchema = makeSchema();
