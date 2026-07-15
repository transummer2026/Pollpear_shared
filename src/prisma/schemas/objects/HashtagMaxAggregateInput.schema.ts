import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  isVisible: z.literal(true).optional()
}).strict();
export const HashtagMaxAggregateInputObjectSchema: z.ZodType<Prisma.HashtagMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.HashtagMaxAggregateInputType>;
export const HashtagMaxAggregateInputObjectZodSchema = makeSchema();
