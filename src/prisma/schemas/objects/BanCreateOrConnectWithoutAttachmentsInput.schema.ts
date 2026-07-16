import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanWhereUniqueInputObjectSchema as BanWhereUniqueInputObjectSchema } from './BanWhereUniqueInput.schema';
import { BanCreateWithoutAttachmentsInputObjectSchema as BanCreateWithoutAttachmentsInputObjectSchema } from './BanCreateWithoutAttachmentsInput.schema';
import { BanUncheckedCreateWithoutAttachmentsInputObjectSchema as BanUncheckedCreateWithoutAttachmentsInputObjectSchema } from './BanUncheckedCreateWithoutAttachmentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BanCreateWithoutAttachmentsInputObjectSchema), z.lazy(() => BanUncheckedCreateWithoutAttachmentsInputObjectSchema)])
}).strict();
export const BanCreateOrConnectWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.BanCreateOrConnectWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.BanCreateOrConnectWithoutAttachmentsInput>;
export const BanCreateOrConnectWithoutAttachmentsInputObjectZodSchema = makeSchema();
