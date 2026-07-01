import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const banattachmentscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BanAttachmentScalarWhereInputObjectSchema), z.lazy(() => BanAttachmentScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BanAttachmentScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BanAttachmentScalarWhereInputObjectSchema), z.lazy(() => BanAttachmentScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  attachmentUrl: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  banId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const BanAttachmentScalarWhereInputObjectSchema: z.ZodType<Prisma.BanAttachmentScalarWhereInput> = banattachmentscalarwhereinputSchema as unknown as z.ZodType<Prisma.BanAttachmentScalarWhereInput>;
export const BanAttachmentScalarWhereInputObjectZodSchema = banattachmentscalarwhereinputSchema;
