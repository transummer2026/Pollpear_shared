import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanCreateWithoutUnbannedByInputObjectSchema as BanCreateWithoutUnbannedByInputObjectSchema } from './BanCreateWithoutUnbannedByInput.schema';
import { BanUncheckedCreateWithoutUnbannedByInputObjectSchema as BanUncheckedCreateWithoutUnbannedByInputObjectSchema } from './BanUncheckedCreateWithoutUnbannedByInput.schema';
import { BanCreateOrConnectWithoutUnbannedByInputObjectSchema as BanCreateOrConnectWithoutUnbannedByInputObjectSchema } from './BanCreateOrConnectWithoutUnbannedByInput.schema';
import { BanUpsertWithWhereUniqueWithoutUnbannedByInputObjectSchema as BanUpsertWithWhereUniqueWithoutUnbannedByInputObjectSchema } from './BanUpsertWithWhereUniqueWithoutUnbannedByInput.schema';
import { BanCreateManyUnbannedByInputEnvelopeObjectSchema as BanCreateManyUnbannedByInputEnvelopeObjectSchema } from './BanCreateManyUnbannedByInputEnvelope.schema';
import { BanWhereUniqueInputObjectSchema as BanWhereUniqueInputObjectSchema } from './BanWhereUniqueInput.schema';
import { BanUpdateWithWhereUniqueWithoutUnbannedByInputObjectSchema as BanUpdateWithWhereUniqueWithoutUnbannedByInputObjectSchema } from './BanUpdateWithWhereUniqueWithoutUnbannedByInput.schema';
import { BanUpdateManyWithWhereWithoutUnbannedByInputObjectSchema as BanUpdateManyWithWhereWithoutUnbannedByInputObjectSchema } from './BanUpdateManyWithWhereWithoutUnbannedByInput.schema';
import { BanScalarWhereInputObjectSchema as BanScalarWhereInputObjectSchema } from './BanScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BanCreateWithoutUnbannedByInputObjectSchema), z.lazy(() => BanCreateWithoutUnbannedByInputObjectSchema).array(), z.lazy(() => BanUncheckedCreateWithoutUnbannedByInputObjectSchema), z.lazy(() => BanUncheckedCreateWithoutUnbannedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BanCreateOrConnectWithoutUnbannedByInputObjectSchema), z.lazy(() => BanCreateOrConnectWithoutUnbannedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BanUpsertWithWhereUniqueWithoutUnbannedByInputObjectSchema), z.lazy(() => BanUpsertWithWhereUniqueWithoutUnbannedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BanCreateManyUnbannedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => BanWhereUniqueInputObjectSchema), z.lazy(() => BanWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BanWhereUniqueInputObjectSchema), z.lazy(() => BanWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BanWhereUniqueInputObjectSchema), z.lazy(() => BanWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BanWhereUniqueInputObjectSchema), z.lazy(() => BanWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => BanUpdateWithWhereUniqueWithoutUnbannedByInputObjectSchema), z.lazy(() => BanUpdateWithWhereUniqueWithoutUnbannedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BanUpdateManyWithWhereWithoutUnbannedByInputObjectSchema), z.lazy(() => BanUpdateManyWithWhereWithoutUnbannedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BanScalarWhereInputObjectSchema), z.lazy(() => BanScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const BanUncheckedUpdateManyWithoutUnbannedByNestedInputObjectSchema: z.ZodType<Prisma.BanUncheckedUpdateManyWithoutUnbannedByNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BanUncheckedUpdateManyWithoutUnbannedByNestedInput>;
export const BanUncheckedUpdateManyWithoutUnbannedByNestedInputObjectZodSchema = makeSchema();
