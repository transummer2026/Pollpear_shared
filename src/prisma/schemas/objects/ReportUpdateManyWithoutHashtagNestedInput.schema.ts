import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportCreateWithoutHashtagInputObjectSchema as ReportCreateWithoutHashtagInputObjectSchema } from './ReportCreateWithoutHashtagInput.schema';
import { ReportUncheckedCreateWithoutHashtagInputObjectSchema as ReportUncheckedCreateWithoutHashtagInputObjectSchema } from './ReportUncheckedCreateWithoutHashtagInput.schema';
import { ReportCreateOrConnectWithoutHashtagInputObjectSchema as ReportCreateOrConnectWithoutHashtagInputObjectSchema } from './ReportCreateOrConnectWithoutHashtagInput.schema';
import { ReportUpsertWithWhereUniqueWithoutHashtagInputObjectSchema as ReportUpsertWithWhereUniqueWithoutHashtagInputObjectSchema } from './ReportUpsertWithWhereUniqueWithoutHashtagInput.schema';
import { ReportCreateManyHashtagInputEnvelopeObjectSchema as ReportCreateManyHashtagInputEnvelopeObjectSchema } from './ReportCreateManyHashtagInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithWhereUniqueWithoutHashtagInputObjectSchema as ReportUpdateWithWhereUniqueWithoutHashtagInputObjectSchema } from './ReportUpdateWithWhereUniqueWithoutHashtagInput.schema';
import { ReportUpdateManyWithWhereWithoutHashtagInputObjectSchema as ReportUpdateManyWithWhereWithoutHashtagInputObjectSchema } from './ReportUpdateManyWithWhereWithoutHashtagInput.schema';
import { ReportScalarWhereInputObjectSchema as ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutHashtagInputObjectSchema), z.lazy(() => ReportCreateWithoutHashtagInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutHashtagInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutHashtagInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutHashtagInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutHashtagInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportUpsertWithWhereUniqueWithoutHashtagInputObjectSchema), z.lazy(() => ReportUpsertWithWhereUniqueWithoutHashtagInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyHashtagInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportUpdateWithWhereUniqueWithoutHashtagInputObjectSchema), z.lazy(() => ReportUpdateWithWhereUniqueWithoutHashtagInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportUpdateManyWithWhereWithoutHashtagInputObjectSchema), z.lazy(() => ReportUpdateManyWithWhereWithoutHashtagInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportUpdateManyWithoutHashtagNestedInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithoutHashtagNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateManyWithoutHashtagNestedInput>;
export const ReportUpdateManyWithoutHashtagNestedInputObjectZodSchema = makeSchema();
