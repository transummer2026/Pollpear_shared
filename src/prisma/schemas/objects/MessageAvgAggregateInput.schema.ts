import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  authorId: z.literal(true).optional(),
  roomId: z.literal(true).optional()
}).strict();
export const MessageAvgAggregateInputObjectSchema: z.ZodType<Prisma.MessageAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MessageAvgAggregateInputType>;
export const MessageAvgAggregateInputObjectZodSchema = makeSchema();
