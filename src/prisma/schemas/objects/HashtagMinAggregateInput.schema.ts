import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  isVisible: z.literal(true).optional()
}).strict();
export const HashtagMinAggregateInputObjectSchema: z.ZodType<Prisma.HashtagMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.HashtagMinAggregateInputType>;
export const HashtagMinAggregateInputObjectZodSchema = makeSchema();
