import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  blockerId: z.literal(true).optional(),
  blockedId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const BlockCountAggregateInputObjectSchema: z.ZodType<Prisma.BlockCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BlockCountAggregateInputType>;
export const BlockCountAggregateInputObjectZodSchema = makeSchema();
