import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanArgsObjectSchema as BanArgsObjectSchema } from './BanArgs.schema'

const makeSchema = () => z.object({
  ban: z.union([z.boolean(), z.lazy(() => BanArgsObjectSchema)]).optional()
}).strict();
export const BanAttachmentIncludeObjectSchema: z.ZodType<Prisma.BanAttachmentInclude> = makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentInclude>;
export const BanAttachmentIncludeObjectZodSchema = makeSchema();
