import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  isVisible: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const HashtagCountAggregateInputObjectSchema: z.ZodType<Prisma.HashtagCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.HashtagCountAggregateInputType>;
export const HashtagCountAggregateInputObjectZodSchema = makeSchema();
