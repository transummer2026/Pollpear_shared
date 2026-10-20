import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  attachmentUrl: SortOrderSchema.optional(),
  banId: SortOrderSchema.optional()
}).strict();
export const BanAttachmentCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BanAttachmentCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentCountOrderByAggregateInput>;
export const BanAttachmentCountOrderByAggregateInputObjectZodSchema = makeSchema();
