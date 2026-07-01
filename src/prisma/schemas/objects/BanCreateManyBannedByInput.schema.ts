import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  banReason: z.string(),
  bannedAt: z.coerce.date(),
  unbannedAt: z.coerce.date(),
  unbanReason: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.number().int(),
  unbannedById: z.number().int().optional().nullable()
}).strict();
export const BanCreateManyBannedByInputObjectSchema: z.ZodType<Prisma.BanCreateManyBannedByInput> = makeSchema() as unknown as z.ZodType<Prisma.BanCreateManyBannedByInput>;
export const BanCreateManyBannedByInputObjectZodSchema = makeSchema();
