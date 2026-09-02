import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanCreateWithoutAttachmentsInputObjectSchema as BanCreateWithoutAttachmentsInputObjectSchema } from './BanCreateWithoutAttachmentsInput.schema';
import { BanUncheckedCreateWithoutAttachmentsInputObjectSchema as BanUncheckedCreateWithoutAttachmentsInputObjectSchema } from './BanUncheckedCreateWithoutAttachmentsInput.schema';
import { BanCreateOrConnectWithoutAttachmentsInputObjectSchema as BanCreateOrConnectWithoutAttachmentsInputObjectSchema } from './BanCreateOrConnectWithoutAttachmentsInput.schema';
import { BanUpsertWithoutAttachmentsInputObjectSchema as BanUpsertWithoutAttachmentsInputObjectSchema } from './BanUpsertWithoutAttachmentsInput.schema';
import { BanWhereUniqueInputObjectSchema as BanWhereUniqueInputObjectSchema } from './BanWhereUniqueInput.schema';
import { BanUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema as BanUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema } from './BanUpdateToOneWithWhereWithoutAttachmentsInput.schema';
import { BanUpdateWithoutAttachmentsInputObjectSchema as BanUpdateWithoutAttachmentsInputObjectSchema } from './BanUpdateWithoutAttachmentsInput.schema';
import { BanUncheckedUpdateWithoutAttachmentsInputObjectSchema as BanUncheckedUpdateWithoutAttachmentsInputObjectSchema } from './BanUncheckedUpdateWithoutAttachmentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BanCreateWithoutAttachmentsInputObjectSchema), z.lazy(() => BanUncheckedCreateWithoutAttachmentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BanCreateOrConnectWithoutAttachmentsInputObjectSchema).optional(),
  upsert: z.lazy(() => BanUpsertWithoutAttachmentsInputObjectSchema).optional(),
  connect: z.lazy(() => BanWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => BanUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema), z.lazy(() => BanUpdateWithoutAttachmentsInputObjectSchema), z.lazy(() => BanUncheckedUpdateWithoutAttachmentsInputObjectSchema)]).optional()
}).strict();
export const BanUpdateOneRequiredWithoutAttachmentsNestedInputObjectSchema: z.ZodType<Prisma.BanUpdateOneRequiredWithoutAttachmentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BanUpdateOneRequiredWithoutAttachmentsNestedInput>;
export const BanUpdateOneRequiredWithoutAttachmentsNestedInputObjectZodSchema = makeSchema();
