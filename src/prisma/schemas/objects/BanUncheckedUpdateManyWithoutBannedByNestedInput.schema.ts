import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanCreateWithoutBannedByInputObjectSchema as BanCreateWithoutBannedByInputObjectSchema } from './BanCreateWithoutBannedByInput.schema';
import { BanUncheckedCreateWithoutBannedByInputObjectSchema as BanUncheckedCreateWithoutBannedByInputObjectSchema } from './BanUncheckedCreateWithoutBannedByInput.schema';
import { BanCreateOrConnectWithoutBannedByInputObjectSchema as BanCreateOrConnectWithoutBannedByInputObjectSchema } from './BanCreateOrConnectWithoutBannedByInput.schema';
import { BanUpsertWithWhereUniqueWithoutBannedByInputObjectSchema as BanUpsertWithWhereUniqueWithoutBannedByInputObjectSchema } from './BanUpsertWithWhereUniqueWithoutBannedByInput.schema';
import { BanCreateManyBannedByInputEnvelopeObjectSchema as BanCreateManyBannedByInputEnvelopeObjectSchema } from './BanCreateManyBannedByInputEnvelope.schema';
import { BanWhereUniqueInputObjectSchema as BanWhereUniqueInputObjectSchema } from './BanWhereUniqueInput.schema';
import { BanUpdateWithWhereUniqueWithoutBannedByInputObjectSchema as BanUpdateWithWhereUniqueWithoutBannedByInputObjectSchema } from './BanUpdateWithWhereUniqueWithoutBannedByInput.schema';
import { BanUpdateManyWithWhereWithoutBannedByInputObjectSchema as BanUpdateManyWithWhereWithoutBannedByInputObjectSchema } from './BanUpdateManyWithWhereWithoutBannedByInput.schema';
import { BanScalarWhereInputObjectSchema as BanScalarWhereInputObjectSchema } from './BanScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BanCreateWithoutBannedByInputObjectSchema), z.lazy(() => BanCreateWithoutBannedByInputObjectSchema).array(), z.lazy(() => BanUncheckedCreateWithoutBannedByInputObjectSchema), z.lazy(() => BanUncheckedCreateWithoutBannedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BanCreateOrConnectWithoutBannedByInputObjectSchema), z.lazy(() => BanCreateOrConnectWithoutBannedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BanUpsertWithWhereUniqueWithoutBannedByInputObjectSchema), z.lazy(() => BanUpsertWithWhereUniqueWithoutBannedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BanCreateManyBannedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => BanWhereUniqueInputObjectSchema), z.lazy(() => BanWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BanWhereUniqueInputObjectSchema), z.lazy(() => BanWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BanWhereUniqueInputObjectSchema), z.lazy(() => BanWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BanWhereUniqueInputObjectSchema), z.lazy(() => BanWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => BanUpdateWithWhereUniqueWithoutBannedByInputObjectSchema), z.lazy(() => BanUpdateWithWhereUniqueWithoutBannedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BanUpdateManyWithWhereWithoutBannedByInputObjectSchema), z.lazy(() => BanUpdateManyWithWhereWithoutBannedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BanScalarWhereInputObjectSchema), z.lazy(() => BanScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const BanUncheckedUpdateManyWithoutBannedByNestedInputObjectSchema: z.ZodType<Prisma.BanUncheckedUpdateManyWithoutBannedByNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BanUncheckedUpdateManyWithoutBannedByNestedInput>;
export const BanUncheckedUpdateManyWithoutBannedByNestedInputObjectZodSchema = makeSchema();
