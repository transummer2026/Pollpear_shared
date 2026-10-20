import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BanOrderByWithRelationInputObjectSchema as BanOrderByWithRelationInputObjectSchema } from './BanOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  attachmentUrl: SortOrderSchema.optional(),
  banId: SortOrderSchema.optional(),
  ban: z.lazy(() => BanOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const BanAttachmentOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.BanAttachmentOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentOrderByWithRelationInput>;
export const BanAttachmentOrderByWithRelationInputObjectZodSchema = makeSchema();
