import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutPollInputObjectSchema as ReportUpdateWithoutPollInputObjectSchema } from './ReportUpdateWithoutPollInput.schema';
import { ReportUncheckedUpdateWithoutPollInputObjectSchema as ReportUncheckedUpdateWithoutPollInputObjectSchema } from './ReportUncheckedUpdateWithoutPollInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateWithoutPollInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutPollInputObjectSchema)])
}).strict();
export const ReportUpdateWithWhereUniqueWithoutPollInputObjectSchema: z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutPollInput>;
export const ReportUpdateWithWhereUniqueWithoutPollInputObjectZodSchema = makeSchema();
