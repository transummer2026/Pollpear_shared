import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanAttachmentWhereInputObjectSchema as BanAttachmentWhereInputObjectSchema } from './BanAttachmentWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => BanAttachmentWhereInputObjectSchema).optional(),
  some: z.lazy(() => BanAttachmentWhereInputObjectSchema).optional(),
  none: z.lazy(() => BanAttachmentWhereInputObjectSchema).optional()
}).strict();
export const BanAttachmentListRelationFilterObjectSchema: z.ZodType<Prisma.BanAttachmentListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentListRelationFilter>;
export const BanAttachmentListRelationFilterObjectZodSchema = makeSchema();
