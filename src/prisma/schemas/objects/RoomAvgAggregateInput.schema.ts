import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdById: z.literal(true).optional()
}).strict();
export const RoomAvgAggregateInputObjectSchema: z.ZodType<Prisma.RoomAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RoomAvgAggregateInputType>;
export const RoomAvgAggregateInputObjectZodSchema = makeSchema();
