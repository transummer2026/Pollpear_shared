import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanUpdateWithoutAttachmentsInputObjectSchema as BanUpdateWithoutAttachmentsInputObjectSchema } from './BanUpdateWithoutAttachmentsInput.schema';
import { BanUncheckedUpdateWithoutAttachmentsInputObjectSchema as BanUncheckedUpdateWithoutAttachmentsInputObjectSchema } from './BanUncheckedUpdateWithoutAttachmentsInput.schema';
import { BanCreateWithoutAttachmentsInputObjectSchema as BanCreateWithoutAttachmentsInputObjectSchema } from './BanCreateWithoutAttachmentsInput.schema';
import { BanUncheckedCreateWithoutAttachmentsInputObjectSchema as BanUncheckedCreateWithoutAttachmentsInputObjectSchema } from './BanUncheckedCreateWithoutAttachmentsInput.schema';
import { BanWhereInputObjectSchema as BanWhereInputObjectSchema } from './BanWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => BanUpdateWithoutAttachmentsInputObjectSchema), z.lazy(() => BanUncheckedUpdateWithoutAttachmentsInputObjectSchema)]),
  create: z.union([z.lazy(() => BanCreateWithoutAttachmentsInputObjectSchema), z.lazy(() => BanUncheckedCreateWithoutAttachmentsInputObjectSchema)]),
  where: z.lazy(() => BanWhereInputObjectSchema).optional()
}).strict();
export const BanUpsertWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.BanUpsertWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.BanUpsertWithoutAttachmentsInput>;
export const BanUpsertWithoutAttachmentsInputObjectZodSchema = makeSchema();
