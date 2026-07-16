import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportCreateWithoutMessageInputObjectSchema as ReportCreateWithoutMessageInputObjectSchema } from './ReportCreateWithoutMessageInput.schema';
import { ReportUncheckedCreateWithoutMessageInputObjectSchema as ReportUncheckedCreateWithoutMessageInputObjectSchema } from './ReportUncheckedCreateWithoutMessageInput.schema';
import { ReportCreateOrConnectWithoutMessageInputObjectSchema as ReportCreateOrConnectWithoutMessageInputObjectSchema } from './ReportCreateOrConnectWithoutMessageInput.schema';
import { ReportUpsertWithWhereUniqueWithoutMessageInputObjectSchema as ReportUpsertWithWhereUniqueWithoutMessageInputObjectSchema } from './ReportUpsertWithWhereUniqueWithoutMessageInput.schema';
import { ReportCreateManyMessageInputEnvelopeObjectSchema as ReportCreateManyMessageInputEnvelopeObjectSchema } from './ReportCreateManyMessageInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithWhereUniqueWithoutMessageInputObjectSchema as ReportUpdateWithWhereUniqueWithoutMessageInputObjectSchema } from './ReportUpdateWithWhereUniqueWithoutMessageInput.schema';
import { ReportUpdateManyWithWhereWithoutMessageInputObjectSchema as ReportUpdateManyWithWhereWithoutMessageInputObjectSchema } from './ReportUpdateManyWithWhereWithoutMessageInput.schema';
import { ReportScalarWhereInputObjectSchema as ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutMessageInputObjectSchema), z.lazy(() => ReportCreateWithoutMessageInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutMessageInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutMessageInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutMessageInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutMessageInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportUpsertWithWhereUniqueWithoutMessageInputObjectSchema), z.lazy(() => ReportUpsertWithWhereUniqueWithoutMessageInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyMessageInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportUpdateWithWhereUniqueWithoutMessageInputObjectSchema), z.lazy(() => ReportUpdateWithWhereUniqueWithoutMessageInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportUpdateManyWithWhereWithoutMessageInputObjectSchema), z.lazy(() => ReportUpdateManyWithWhereWithoutMessageInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportUncheckedUpdateManyWithoutMessageNestedInputObjectSchema: z.ZodType<Prisma.ReportUncheckedUpdateManyWithoutMessageNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUncheckedUpdateManyWithoutMessageNestedInput>;
export const ReportUncheckedUpdateManyWithoutMessageNestedInputObjectZodSchema = makeSchema();
