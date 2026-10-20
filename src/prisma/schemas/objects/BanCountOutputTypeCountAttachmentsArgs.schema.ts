import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanAttachmentWhereInputObjectSchema as BanAttachmentWhereInputObjectSchema } from './BanAttachmentWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanAttachmentWhereInputObjectSchema).optional()
}).strict();
export const BanCountOutputTypeCountAttachmentsArgsObjectSchema = makeSchema();
export const BanCountOutputTypeCountAttachmentsArgsObjectZodSchema = makeSchema();
