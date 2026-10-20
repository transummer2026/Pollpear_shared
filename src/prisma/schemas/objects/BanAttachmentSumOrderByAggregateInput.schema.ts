import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  banId: SortOrderSchema.optional()
}).strict();
export const BanAttachmentSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BanAttachmentSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentSumOrderByAggregateInput>;
export const BanAttachmentSumOrderByAggregateInputObjectZodSchema = makeSchema();
