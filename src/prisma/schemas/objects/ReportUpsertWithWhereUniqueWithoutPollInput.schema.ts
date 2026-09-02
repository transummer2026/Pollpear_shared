import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutPollInputObjectSchema as ReportUpdateWithoutPollInputObjectSchema } from './ReportUpdateWithoutPollInput.schema';
import { ReportUncheckedUpdateWithoutPollInputObjectSchema as ReportUncheckedUpdateWithoutPollInputObjectSchema } from './ReportUncheckedUpdateWithoutPollInput.schema';
import { ReportCreateWithoutPollInputObjectSchema as ReportCreateWithoutPollInputObjectSchema } from './ReportCreateWithoutPollInput.schema';
import { ReportUncheckedCreateWithoutPollInputObjectSchema as ReportUncheckedCreateWithoutPollInputObjectSchema } from './ReportUncheckedCreateWithoutPollInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportUpdateWithoutPollInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutPollInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutPollInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutPollInputObjectSchema)])
}).strict();
export const ReportUpsertWithWhereUniqueWithoutPollInputObjectSchema: z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutPollInput>;
export const ReportUpsertWithWhereUniqueWithoutPollInputObjectZodSchema = makeSchema();
