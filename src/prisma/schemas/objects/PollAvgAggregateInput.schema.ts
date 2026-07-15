import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  roomId: z.literal(true).optional()
}).strict();
export const PollAvgAggregateInputObjectSchema: z.ZodType<Prisma.PollAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PollAvgAggregateInputType>;
export const PollAvgAggregateInputObjectZodSchema = makeSchema();
