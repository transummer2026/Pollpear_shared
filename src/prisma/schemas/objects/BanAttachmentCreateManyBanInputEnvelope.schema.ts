import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanAttachmentCreateManyBanInputObjectSchema as BanAttachmentCreateManyBanInputObjectSchema } from './BanAttachmentCreateManyBanInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => BanAttachmentCreateManyBanInputObjectSchema), z.lazy(() => BanAttachmentCreateManyBanInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const BanAttachmentCreateManyBanInputEnvelopeObjectSchema: z.ZodType<Prisma.BanAttachmentCreateManyBanInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentCreateManyBanInputEnvelope>;
export const BanAttachmentCreateManyBanInputEnvelopeObjectZodSchema = makeSchema();
