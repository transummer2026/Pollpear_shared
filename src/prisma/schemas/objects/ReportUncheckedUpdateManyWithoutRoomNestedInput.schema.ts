import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportCreateWithoutRoomInputObjectSchema as ReportCreateWithoutRoomInputObjectSchema } from './ReportCreateWithoutRoomInput.schema';
import { ReportUncheckedCreateWithoutRoomInputObjectSchema as ReportUncheckedCreateWithoutRoomInputObjectSchema } from './ReportUncheckedCreateWithoutRoomInput.schema';
import { ReportCreateOrConnectWithoutRoomInputObjectSchema as ReportCreateOrConnectWithoutRoomInputObjectSchema } from './ReportCreateOrConnectWithoutRoomInput.schema';
import { ReportUpsertWithWhereUniqueWithoutRoomInputObjectSchema as ReportUpsertWithWhereUniqueWithoutRoomInputObjectSchema } from './ReportUpsertWithWhereUniqueWithoutRoomInput.schema';
import { ReportCreateManyRoomInputEnvelopeObjectSchema as ReportCreateManyRoomInputEnvelopeObjectSchema } from './ReportCreateManyRoomInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithWhereUniqueWithoutRoomInputObjectSchema as ReportUpdateWithWhereUniqueWithoutRoomInputObjectSchema } from './ReportUpdateWithWhereUniqueWithoutRoomInput.schema';
import { ReportUpdateManyWithWhereWithoutRoomInputObjectSchema as ReportUpdateManyWithWhereWithoutRoomInputObjectSchema } from './ReportUpdateManyWithWhereWithoutRoomInput.schema';
import { ReportScalarWhereInputObjectSchema as ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutRoomInputObjectSchema), z.lazy(() => ReportCreateWithoutRoomInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutRoomInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutRoomInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutRoomInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutRoomInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportUpsertWithWhereUniqueWithoutRoomInputObjectSchema), z.lazy(() => ReportUpsertWithWhereUniqueWithoutRoomInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyRoomInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportUpdateWithWhereUniqueWithoutRoomInputObjectSchema), z.lazy(() => ReportUpdateWithWhereUniqueWithoutRoomInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportUpdateManyWithWhereWithoutRoomInputObjectSchema), z.lazy(() => ReportUpdateManyWithWhereWithoutRoomInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportUncheckedUpdateManyWithoutRoomNestedInputObjectSchema: z.ZodType<Prisma.ReportUncheckedUpdateManyWithoutRoomNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUncheckedUpdateManyWithoutRoomNestedInput>;
export const ReportUncheckedUpdateManyWithoutRoomNestedInputObjectZodSchema = makeSchema();
