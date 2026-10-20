import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanAttachmentSelectObjectSchema as BanAttachmentSelectObjectSchema } from './BanAttachmentSelect.schema';
import { BanAttachmentIncludeObjectSchema as BanAttachmentIncludeObjectSchema } from './BanAttachmentInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BanAttachmentSelectObjectSchema).optional(),
  include: z.lazy(() => BanAttachmentIncludeObjectSchema).optional()
}).strict();
export const BanAttachmentArgsObjectSchema = makeSchema();
export const BanAttachmentArgsObjectZodSchema = makeSchema();
