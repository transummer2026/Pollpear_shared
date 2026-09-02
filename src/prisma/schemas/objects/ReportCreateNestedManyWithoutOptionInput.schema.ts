import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportCreateWithoutOptionInputObjectSchema as ReportCreateWithoutOptionInputObjectSchema } from './ReportCreateWithoutOptionInput.schema';
import { ReportUncheckedCreateWithoutOptionInputObjectSchema as ReportUncheckedCreateWithoutOptionInputObjectSchema } from './ReportUncheckedCreateWithoutOptionInput.schema';
import { ReportCreateOrConnectWithoutOptionInputObjectSchema as ReportCreateOrConnectWithoutOptionInputObjectSchema } from './ReportCreateOrConnectWithoutOptionInput.schema';
import { ReportCreateManyOptionInputEnvelopeObjectSchema as ReportCreateManyOptionInputEnvelopeObjectSchema } from './ReportCreateManyOptionInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutOptionInputObjectSchema), z.lazy(() => ReportCreateWithoutOptionInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutOptionInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutOptionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutOptionInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutOptionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyOptionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportCreateNestedManyWithoutOptionInputObjectSchema: z.ZodType<Prisma.ReportCreateNestedManyWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateNestedManyWithoutOptionInput>;
export const ReportCreateNestedManyWithoutOptionInputObjectZodSchema = makeSchema();
