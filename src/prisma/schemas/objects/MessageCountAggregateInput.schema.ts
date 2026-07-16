import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  content: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  authorId: z.literal(true).optional(),
  roomId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const MessageCountAggregateInputObjectSchema: z.ZodType<Prisma.MessageCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MessageCountAggregateInputType>;
export const MessageCountAggregateInputObjectZodSchema = makeSchema();
