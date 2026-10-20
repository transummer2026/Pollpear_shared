import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportCreateWithoutPollInputObjectSchema as ReportCreateWithoutPollInputObjectSchema } from './ReportCreateWithoutPollInput.schema';
import { ReportUncheckedCreateWithoutPollInputObjectSchema as ReportUncheckedCreateWithoutPollInputObjectSchema } from './ReportUncheckedCreateWithoutPollInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutPollInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutPollInputObjectSchema)])
}).strict();
export const ReportCreateOrConnectWithoutPollInputObjectSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateOrConnectWithoutPollInput>;
export const ReportCreateOrConnectWithoutPollInputObjectZodSchema = makeSchema();
