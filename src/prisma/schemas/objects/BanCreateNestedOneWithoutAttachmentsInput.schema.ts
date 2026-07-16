import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanCreateWithoutAttachmentsInputObjectSchema as BanCreateWithoutAttachmentsInputObjectSchema } from './BanCreateWithoutAttachmentsInput.schema';
import { BanUncheckedCreateWithoutAttachmentsInputObjectSchema as BanUncheckedCreateWithoutAttachmentsInputObjectSchema } from './BanUncheckedCreateWithoutAttachmentsInput.schema';
import { BanCreateOrConnectWithoutAttachmentsInputObjectSchema as BanCreateOrConnectWithoutAttachmentsInputObjectSchema } from './BanCreateOrConnectWithoutAttachmentsInput.schema';
import { BanWhereUniqueInputObjectSchema as BanWhereUniqueInputObjectSchema } from './BanWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BanCreateWithoutAttachmentsInputObjectSchema), z.lazy(() => BanUncheckedCreateWithoutAttachmentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BanCreateOrConnectWithoutAttachmentsInputObjectSchema).optional(),
  connect: z.lazy(() => BanWhereUniqueInputObjectSchema).optional()
}).strict();
export const BanCreateNestedOneWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.BanCreateNestedOneWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.BanCreateNestedOneWithoutAttachmentsInput>;
export const BanCreateNestedOneWithoutAttachmentsInputObjectZodSchema = makeSchema();
