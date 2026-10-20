import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  banReason: z.string(),
  unbanReason: z.string().optional().nullable(),
  startedAt: z.coerce.date(),
  endedAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.number().int(),
  bannedById: z.number().int(),
  unbannedById: z.number().int().optional().nullable()
}).strict();
export const BanUncheckedCreateWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.BanUncheckedCreateWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.BanUncheckedCreateWithoutAttachmentsInput>;
export const BanUncheckedCreateWithoutAttachmentsInputObjectZodSchema = makeSchema();
