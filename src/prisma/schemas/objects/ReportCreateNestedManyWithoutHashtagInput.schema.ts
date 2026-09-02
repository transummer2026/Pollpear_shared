import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportCreateWithoutHashtagInputObjectSchema as ReportCreateWithoutHashtagInputObjectSchema } from './ReportCreateWithoutHashtagInput.schema';
import { ReportUncheckedCreateWithoutHashtagInputObjectSchema as ReportUncheckedCreateWithoutHashtagInputObjectSchema } from './ReportUncheckedCreateWithoutHashtagInput.schema';
import { ReportCreateOrConnectWithoutHashtagInputObjectSchema as ReportCreateOrConnectWithoutHashtagInputObjectSchema } from './ReportCreateOrConnectWithoutHashtagInput.schema';
import { ReportCreateManyHashtagInputEnvelopeObjectSchema as ReportCreateManyHashtagInputEnvelopeObjectSchema } from './ReportCreateManyHashtagInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutHashtagInputObjectSchema), z.lazy(() => ReportCreateWithoutHashtagInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutHashtagInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutHashtagInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutHashtagInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutHashtagInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyHashtagInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportCreateNestedManyWithoutHashtagInputObjectSchema: z.ZodType<Prisma.ReportCreateNestedManyWithoutHashtagInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateNestedManyWithoutHashtagInput>;
export const ReportCreateNestedManyWithoutHashtagInputObjectZodSchema = makeSchema();
