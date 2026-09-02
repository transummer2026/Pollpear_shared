import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutOptionInputObjectSchema as ReportUpdateWithoutOptionInputObjectSchema } from './ReportUpdateWithoutOptionInput.schema';
import { ReportUncheckedUpdateWithoutOptionInputObjectSchema as ReportUncheckedUpdateWithoutOptionInputObjectSchema } from './ReportUncheckedUpdateWithoutOptionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateWithoutOptionInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutOptionInputObjectSchema)])
}).strict();
export const ReportUpdateWithWhereUniqueWithoutOptionInputObjectSchema: z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutOptionInput>;
export const ReportUpdateWithWhereUniqueWithoutOptionInputObjectZodSchema = makeSchema();
