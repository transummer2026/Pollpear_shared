import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  authorId: z.literal(true).optional(),
  roomId: z.literal(true).optional()
}).strict();
export const MessageSumAggregateInputObjectSchema: z.ZodType<Prisma.MessageSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MessageSumAggregateInputType>;
export const MessageSumAggregateInputObjectZodSchema = makeSchema();
