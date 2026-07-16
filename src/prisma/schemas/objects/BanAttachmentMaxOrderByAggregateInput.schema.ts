import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  attachmentUrl: SortOrderSchema.optional(),
  banId: SortOrderSchema.optional()
}).strict();
export const BanAttachmentMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BanAttachmentMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentMaxOrderByAggregateInput>;
export const BanAttachmentMaxOrderByAggregateInputObjectZodSchema = makeSchema();
