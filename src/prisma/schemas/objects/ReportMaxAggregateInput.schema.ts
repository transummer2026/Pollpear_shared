import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  reason: z.literal(true).optional(),
  content: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  reporterId: z.literal(true).optional(),
  reportedId: z.literal(true).optional(),
  roomId: z.literal(true).optional(),
  messageId: z.literal(true).optional(),
  pollId: z.literal(true).optional(),
  optionId: z.literal(true).optional(),
  hashtagId: z.literal(true).optional()
}).strict();
export const ReportMaxAggregateInputObjectSchema: z.ZodType<Prisma.ReportMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReportMaxAggregateInputType>;
export const ReportMaxAggregateInputObjectZodSchema = makeSchema();
