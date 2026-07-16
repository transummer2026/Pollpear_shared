import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  roomId: z.literal(true).optional()
}).strict();
export const PollSumAggregateInputObjectSchema: z.ZodType<Prisma.PollSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PollSumAggregateInputType>;
export const PollSumAggregateInputObjectZodSchema = makeSchema();
