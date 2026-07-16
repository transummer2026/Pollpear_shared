import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  blockerId: z.literal(true).optional(),
  blockedId: z.literal(true).optional()
}).strict();
export const BlockSumAggregateInputObjectSchema: z.ZodType<Prisma.BlockSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BlockSumAggregateInputType>;
export const BlockSumAggregateInputObjectZodSchema = makeSchema();
