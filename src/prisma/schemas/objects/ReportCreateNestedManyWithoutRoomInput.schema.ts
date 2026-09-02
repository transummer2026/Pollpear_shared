import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportCreateWithoutRoomInputObjectSchema as ReportCreateWithoutRoomInputObjectSchema } from './ReportCreateWithoutRoomInput.schema';
import { ReportUncheckedCreateWithoutRoomInputObjectSchema as ReportUncheckedCreateWithoutRoomInputObjectSchema } from './ReportUncheckedCreateWithoutRoomInput.schema';
import { ReportCreateOrConnectWithoutRoomInputObjectSchema as ReportCreateOrConnectWithoutRoomInputObjectSchema } from './ReportCreateOrConnectWithoutRoomInput.schema';
import { ReportCreateManyRoomInputEnvelopeObjectSchema as ReportCreateManyRoomInputEnvelopeObjectSchema } from './ReportCreateManyRoomInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutRoomInputObjectSchema), z.lazy(() => ReportCreateWithoutRoomInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutRoomInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutRoomInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutRoomInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutRoomInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyRoomInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportCreateNestedManyWithoutRoomInputObjectSchema: z.ZodType<Prisma.ReportCreateNestedManyWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateNestedManyWithoutRoomInput>;
export const ReportCreateNestedManyWithoutRoomInputObjectZodSchema = makeSchema();
