import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanAttachmentUncheckedCreateNestedManyWithoutBanInputObjectSchema as BanAttachmentUncheckedCreateNestedManyWithoutBanInputObjectSchema } from './BanAttachmentUncheckedCreateNestedManyWithoutBanInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  banReason: z.string(),
  unbanReason: z.string().optional().nullable(),
  startedAt: z.coerce.date(),
  endedAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  bannedById: z.number().int(),
  unbannedById: z.number().int().optional().nullable(),
  attachments: z.lazy(() => BanAttachmentUncheckedCreateNestedManyWithoutBanInputObjectSchema).optional()
}).strict();
export const BanUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.BanUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BanUncheckedCreateWithoutUserInput>;
export const BanUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
