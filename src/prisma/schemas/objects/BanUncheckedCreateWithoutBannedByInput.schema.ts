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
  unbannedById: z.number().int().optional().nullable(),
  attachments: z.lazy(() => BanAttachmentUncheckedCreateNestedManyWithoutBanInputObjectSchema).optional()
}).strict();
export const BanUncheckedCreateWithoutBannedByInputObjectSchema: z.ZodType<Prisma.BanUncheckedCreateWithoutBannedByInput> = makeSchema() as unknown as z.ZodType<Prisma.BanUncheckedCreateWithoutBannedByInput>;
export const BanUncheckedCreateWithoutBannedByInputObjectZodSchema = makeSchema();
