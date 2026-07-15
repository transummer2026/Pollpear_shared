import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanArgsObjectSchema as BanArgsObjectSchema } from './BanArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  attachmentUrl: z.boolean().optional(),
  banId: z.boolean().optional(),
  ban: z.union([z.boolean(), z.lazy(() => BanArgsObjectSchema)]).optional()
}).strict();
export const BanAttachmentSelectObjectSchema: z.ZodType<Prisma.BanAttachmentSelect> = makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentSelect>;
export const BanAttachmentSelectObjectZodSchema = makeSchema();
