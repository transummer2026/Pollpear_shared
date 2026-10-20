import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportCreateWithoutPollInputObjectSchema as ReportCreateWithoutPollInputObjectSchema } from './ReportCreateWithoutPollInput.schema';
import { ReportUncheckedCreateWithoutPollInputObjectSchema as ReportUncheckedCreateWithoutPollInputObjectSchema } from './ReportUncheckedCreateWithoutPollInput.schema';
import { ReportCreateOrConnectWithoutPollInputObjectSchema as ReportCreateOrConnectWithoutPollInputObjectSchema } from './ReportCreateOrConnectWithoutPollInput.schema';
import { ReportCreateManyPollInputEnvelopeObjectSchema as ReportCreateManyPollInputEnvelopeObjectSchema } from './ReportCreateManyPollInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutPollInputObjectSchema), z.lazy(() => ReportCreateWithoutPollInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutPollInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutPollInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutPollInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutPollInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyPollInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportUncheckedCreateNestedManyWithoutPollInputObjectSchema: z.ZodType<Prisma.ReportUncheckedCreateNestedManyWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUncheckedCreateNestedManyWithoutPollInput>;
export const ReportUncheckedCreateNestedManyWithoutPollInputObjectZodSchema = makeSchema();
