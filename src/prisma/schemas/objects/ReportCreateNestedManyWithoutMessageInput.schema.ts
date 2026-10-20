import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportCreateWithoutMessageInputObjectSchema as ReportCreateWithoutMessageInputObjectSchema } from './ReportCreateWithoutMessageInput.schema';
import { ReportUncheckedCreateWithoutMessageInputObjectSchema as ReportUncheckedCreateWithoutMessageInputObjectSchema } from './ReportUncheckedCreateWithoutMessageInput.schema';
import { ReportCreateOrConnectWithoutMessageInputObjectSchema as ReportCreateOrConnectWithoutMessageInputObjectSchema } from './ReportCreateOrConnectWithoutMessageInput.schema';
import { ReportCreateManyMessageInputEnvelopeObjectSchema as ReportCreateManyMessageInputEnvelopeObjectSchema } from './ReportCreateManyMessageInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutMessageInputObjectSchema), z.lazy(() => ReportCreateWithoutMessageInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutMessageInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutMessageInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutMessageInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutMessageInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyMessageInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportCreateNestedManyWithoutMessageInputObjectSchema: z.ZodType<Prisma.ReportCreateNestedManyWithoutMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateNestedManyWithoutMessageInput>;
export const ReportCreateNestedManyWithoutMessageInputObjectZodSchema = makeSchema();
