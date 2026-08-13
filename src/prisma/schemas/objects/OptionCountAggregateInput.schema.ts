import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  text: z.literal(true).optional(),
  sliderLeftLabel: z.literal(true).optional(),
  sliderRightLabel: z.literal(true).optional(),
  order: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  pollId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const OptionCountAggregateInputObjectSchema: z.ZodType<Prisma.OptionCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OptionCountAggregateInputType>;
export const OptionCountAggregateInputObjectZodSchema = makeSchema();
