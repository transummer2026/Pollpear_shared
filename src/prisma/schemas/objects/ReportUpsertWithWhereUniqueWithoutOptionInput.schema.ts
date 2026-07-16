import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutOptionInputObjectSchema as ReportUpdateWithoutOptionInputObjectSchema } from './ReportUpdateWithoutOptionInput.schema';
import { ReportUncheckedUpdateWithoutOptionInputObjectSchema as ReportUncheckedUpdateWithoutOptionInputObjectSchema } from './ReportUncheckedUpdateWithoutOptionInput.schema';
import { ReportCreateWithoutOptionInputObjectSchema as ReportCreateWithoutOptionInputObjectSchema } from './ReportCreateWithoutOptionInput.schema';
import { ReportUncheckedCreateWithoutOptionInputObjectSchema as ReportUncheckedCreateWithoutOptionInputObjectSchema } from './ReportUncheckedCreateWithoutOptionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportUpdateWithoutOptionInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutOptionInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutOptionInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutOptionInputObjectSchema)])
}).strict();
export const ReportUpsertWithWhereUniqueWithoutOptionInputObjectSchema: z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutOptionInput>;
export const ReportUpsertWithWhereUniqueWithoutOptionInputObjectZodSchema = makeSchema();
