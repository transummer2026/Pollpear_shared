import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanAttachmentCreateWithoutBanInputObjectSchema as BanAttachmentCreateWithoutBanInputObjectSchema } from './BanAttachmentCreateWithoutBanInput.schema';
import { BanAttachmentUncheckedCreateWithoutBanInputObjectSchema as BanAttachmentUncheckedCreateWithoutBanInputObjectSchema } from './BanAttachmentUncheckedCreateWithoutBanInput.schema';
import { BanAttachmentCreateOrConnectWithoutBanInputObjectSchema as BanAttachmentCreateOrConnectWithoutBanInputObjectSchema } from './BanAttachmentCreateOrConnectWithoutBanInput.schema';
import { BanAttachmentUpsertWithWhereUniqueWithoutBanInputObjectSchema as BanAttachmentUpsertWithWhereUniqueWithoutBanInputObjectSchema } from './BanAttachmentUpsertWithWhereUniqueWithoutBanInput.schema';
import { BanAttachmentCreateManyBanInputEnvelopeObjectSchema as BanAttachmentCreateManyBanInputEnvelopeObjectSchema } from './BanAttachmentCreateManyBanInputEnvelope.schema';
import { BanAttachmentWhereUniqueInputObjectSchema as BanAttachmentWhereUniqueInputObjectSchema } from './BanAttachmentWhereUniqueInput.schema';
import { BanAttachmentUpdateWithWhereUniqueWithoutBanInputObjectSchema as BanAttachmentUpdateWithWhereUniqueWithoutBanInputObjectSchema } from './BanAttachmentUpdateWithWhereUniqueWithoutBanInput.schema';
import { BanAttachmentUpdateManyWithWhereWithoutBanInputObjectSchema as BanAttachmentUpdateManyWithWhereWithoutBanInputObjectSchema } from './BanAttachmentUpdateManyWithWhereWithoutBanInput.schema';
import { BanAttachmentScalarWhereInputObjectSchema as BanAttachmentScalarWhereInputObjectSchema } from './BanAttachmentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BanAttachmentCreateWithoutBanInputObjectSchema), z.lazy(() => BanAttachmentCreateWithoutBanInputObjectSchema).array(), z.lazy(() => BanAttachmentUncheckedCreateWithoutBanInputObjectSchema), z.lazy(() => BanAttachmentUncheckedCreateWithoutBanInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BanAttachmentCreateOrConnectWithoutBanInputObjectSchema), z.lazy(() => BanAttachmentCreateOrConnectWithoutBanInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BanAttachmentUpsertWithWhereUniqueWithoutBanInputObjectSchema), z.lazy(() => BanAttachmentUpsertWithWhereUniqueWithoutBanInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BanAttachmentCreateManyBanInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => BanAttachmentWhereUniqueInputObjectSchema), z.lazy(() => BanAttachmentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BanAttachmentWhereUniqueInputObjectSchema), z.lazy(() => BanAttachmentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BanAttachmentWhereUniqueInputObjectSchema), z.lazy(() => BanAttachmentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BanAttachmentWhereUniqueInputObjectSchema), z.lazy(() => BanAttachmentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => BanAttachmentUpdateWithWhereUniqueWithoutBanInputObjectSchema), z.lazy(() => BanAttachmentUpdateWithWhereUniqueWithoutBanInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BanAttachmentUpdateManyWithWhereWithoutBanInputObjectSchema), z.lazy(() => BanAttachmentUpdateManyWithWhereWithoutBanInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BanAttachmentScalarWhereInputObjectSchema), z.lazy(() => BanAttachmentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const BanAttachmentUncheckedUpdateManyWithoutBanNestedInputObjectSchema: z.ZodType<Prisma.BanAttachmentUncheckedUpdateManyWithoutBanNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentUncheckedUpdateManyWithoutBanNestedInput>;
export const BanAttachmentUncheckedUpdateManyWithoutBanNestedInputObjectZodSchema = makeSchema();
