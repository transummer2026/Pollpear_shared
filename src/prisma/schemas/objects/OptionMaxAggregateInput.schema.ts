import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  label: z.literal(true).optional(),
  sliderLeftLabel: z.literal(true).optional(),
  sliderRightLabel: z.literal(true).optional(),
  order: z.literal(true).optional(),
  isDeleted: z.literal(true).optional(),
  pollId: z.literal(true).optional()
}).strict();
export const OptionMaxAggregateInputObjectSchema: z.ZodType<Prisma.OptionMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OptionMaxAggregateInputType>;
export const OptionMaxAggregateInputObjectZodSchema = makeSchema();
