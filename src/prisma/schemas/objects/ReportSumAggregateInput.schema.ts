import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  reporterId: z.literal(true).optional(),
  reportedId: z.literal(true).optional(),
  roomId: z.literal(true).optional(),
  messageId: z.literal(true).optional(),
  pollId: z.literal(true).optional(),
  optionId: z.literal(true).optional(),
  hashtagId: z.literal(true).optional()
}).strict();
export const ReportSumAggregateInputObjectSchema: z.ZodType<Prisma.ReportSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReportSumAggregateInputType>;
export const ReportSumAggregateInputObjectZodSchema = makeSchema();
