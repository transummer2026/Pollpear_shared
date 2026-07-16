import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BanAttachmentCountOrderByAggregateInputObjectSchema as BanAttachmentCountOrderByAggregateInputObjectSchema } from './BanAttachmentCountOrderByAggregateInput.schema';
import { BanAttachmentAvgOrderByAggregateInputObjectSchema as BanAttachmentAvgOrderByAggregateInputObjectSchema } from './BanAttachmentAvgOrderByAggregateInput.schema';
import { BanAttachmentMaxOrderByAggregateInputObjectSchema as BanAttachmentMaxOrderByAggregateInputObjectSchema } from './BanAttachmentMaxOrderByAggregateInput.schema';
import { BanAttachmentMinOrderByAggregateInputObjectSchema as BanAttachmentMinOrderByAggregateInputObjectSchema } from './BanAttachmentMinOrderByAggregateInput.schema';
import { BanAttachmentSumOrderByAggregateInputObjectSchema as BanAttachmentSumOrderByAggregateInputObjectSchema } from './BanAttachmentSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  attachmentUrl: SortOrderSchema.optional(),
  banId: SortOrderSchema.optional(),
  _count: z.lazy(() => BanAttachmentCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => BanAttachmentAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => BanAttachmentMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => BanAttachmentMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => BanAttachmentSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const BanAttachmentOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.BanAttachmentOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentOrderByWithAggregationInput>;
export const BanAttachmentOrderByWithAggregationInputObjectZodSchema = makeSchema();
