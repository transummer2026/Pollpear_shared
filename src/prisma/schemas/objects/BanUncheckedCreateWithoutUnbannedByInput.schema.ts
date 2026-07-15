import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanAttachmentUncheckedCreateNestedManyWithoutBanInputObjectSchema as BanAttachmentUncheckedCreateNestedManyWithoutBanInputObjectSchema } from './BanAttachmentUncheckedCreateNestedManyWithoutBanInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  banReason: z.string(),
  bannedAt: z.coerce.date(),
  unbannedAt: z.coerce.date(),
  unbanReason: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.number().int(),
  bannedById: z.number().int(),
  attachments: z.lazy(() => BanAttachmentUncheckedCreateNestedManyWithoutBanInputObjectSchema).optional()
}).strict();
export const BanUncheckedCreateWithoutUnbannedByInputObjectSchema: z.ZodType<Prisma.BanUncheckedCreateWithoutUnbannedByInput> = makeSchema() as unknown as z.ZodType<Prisma.BanUncheckedCreateWithoutUnbannedByInput>;
export const BanUncheckedCreateWithoutUnbannedByInputObjectZodSchema = makeSchema();
