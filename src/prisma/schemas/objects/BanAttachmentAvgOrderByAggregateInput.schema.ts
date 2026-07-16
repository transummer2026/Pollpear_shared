import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  banId: SortOrderSchema.optional()
}).strict();
export const BanAttachmentAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BanAttachmentAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentAvgOrderByAggregateInput>;
export const BanAttachmentAvgOrderByAggregateInputObjectZodSchema = makeSchema();
