import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  banId: z.literal(true).optional()
}).strict();
export const BanAttachmentSumAggregateInputObjectSchema: z.ZodType<Prisma.BanAttachmentSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentSumAggregateInputType>;
export const BanAttachmentSumAggregateInputObjectZodSchema = makeSchema();
