import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  banId: z.literal(true).optional()
}).strict();
export const BanAttachmentAvgAggregateInputObjectSchema: z.ZodType<Prisma.BanAttachmentAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentAvgAggregateInputType>;
export const BanAttachmentAvgAggregateInputObjectZodSchema = makeSchema();
