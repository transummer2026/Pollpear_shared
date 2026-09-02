import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanWhereInputObjectSchema as BanWhereInputObjectSchema } from './BanWhereInput.schema';
import { BanUpdateWithoutAttachmentsInputObjectSchema as BanUpdateWithoutAttachmentsInputObjectSchema } from './BanUpdateWithoutAttachmentsInput.schema';
import { BanUncheckedUpdateWithoutAttachmentsInputObjectSchema as BanUncheckedUpdateWithoutAttachmentsInputObjectSchema } from './BanUncheckedUpdateWithoutAttachmentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => BanUpdateWithoutAttachmentsInputObjectSchema), z.lazy(() => BanUncheckedUpdateWithoutAttachmentsInputObjectSchema)])
}).strict();
export const BanUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.BanUpdateToOneWithWhereWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.BanUpdateToOneWithWhereWithoutAttachmentsInput>;
export const BanUpdateToOneWithWhereWithoutAttachmentsInputObjectZodSchema = makeSchema();
