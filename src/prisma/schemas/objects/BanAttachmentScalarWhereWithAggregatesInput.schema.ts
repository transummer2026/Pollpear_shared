import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const banattachmentscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => BanAttachmentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BanAttachmentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BanAttachmentScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BanAttachmentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BanAttachmentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  attachmentUrl: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  banId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const BanAttachmentScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.BanAttachmentScalarWhereWithAggregatesInput> = banattachmentscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.BanAttachmentScalarWhereWithAggregatesInput>;
export const BanAttachmentScalarWhereWithAggregatesInputObjectZodSchema = banattachmentscalarwherewithaggregatesinputSchema;
