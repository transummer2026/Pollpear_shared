import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportCreateWithoutOptionInputObjectSchema as ReportCreateWithoutOptionInputObjectSchema } from './ReportCreateWithoutOptionInput.schema';
import { ReportUncheckedCreateWithoutOptionInputObjectSchema as ReportUncheckedCreateWithoutOptionInputObjectSchema } from './ReportUncheckedCreateWithoutOptionInput.schema';
import { ReportCreateOrConnectWithoutOptionInputObjectSchema as ReportCreateOrConnectWithoutOptionInputObjectSchema } from './ReportCreateOrConnectWithoutOptionInput.schema';
import { ReportUpsertWithWhereUniqueWithoutOptionInputObjectSchema as ReportUpsertWithWhereUniqueWithoutOptionInputObjectSchema } from './ReportUpsertWithWhereUniqueWithoutOptionInput.schema';
import { ReportCreateManyOptionInputEnvelopeObjectSchema as ReportCreateManyOptionInputEnvelopeObjectSchema } from './ReportCreateManyOptionInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithWhereUniqueWithoutOptionInputObjectSchema as ReportUpdateWithWhereUniqueWithoutOptionInputObjectSchema } from './ReportUpdateWithWhereUniqueWithoutOptionInput.schema';
import { ReportUpdateManyWithWhereWithoutOptionInputObjectSchema as ReportUpdateManyWithWhereWithoutOptionInputObjectSchema } from './ReportUpdateManyWithWhereWithoutOptionInput.schema';
import { ReportScalarWhereInputObjectSchema as ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutOptionInputObjectSchema), z.lazy(() => ReportCreateWithoutOptionInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutOptionInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutOptionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutOptionInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutOptionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportUpsertWithWhereUniqueWithoutOptionInputObjectSchema), z.lazy(() => ReportUpsertWithWhereUniqueWithoutOptionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyOptionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportUpdateWithWhereUniqueWithoutOptionInputObjectSchema), z.lazy(() => ReportUpdateWithWhereUniqueWithoutOptionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportUpdateManyWithWhereWithoutOptionInputObjectSchema), z.lazy(() => ReportUpdateManyWithWhereWithoutOptionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportUncheckedUpdateManyWithoutOptionNestedInputObjectSchema: z.ZodType<Prisma.ReportUncheckedUpdateManyWithoutOptionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUncheckedUpdateManyWithoutOptionNestedInput>;
export const ReportUncheckedUpdateManyWithoutOptionNestedInputObjectZodSchema = makeSchema();
