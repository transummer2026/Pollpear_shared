import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  blockerId: z.literal(true).optional(),
  blockedId: z.literal(true).optional()
}).strict();
export const BlockAvgAggregateInputObjectSchema: z.ZodType<Prisma.BlockAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BlockAvgAggregateInputType>;
export const BlockAvgAggregateInputObjectZodSchema = makeSchema();
