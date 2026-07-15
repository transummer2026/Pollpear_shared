import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportScalarWhereInputObjectSchema as ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema';
import { ReportUpdateManyMutationInputObjectSchema as ReportUpdateManyMutationInputObjectSchema } from './ReportUpdateManyMutationInput.schema';
import { ReportUncheckedUpdateManyWithoutReporterInputObjectSchema as ReportUncheckedUpdateManyWithoutReporterInputObjectSchema } from './ReportUncheckedUpdateManyWithoutReporterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateManyMutationInputObjectSchema), z.lazy(() => ReportUncheckedUpdateManyWithoutReporterInputObjectSchema)])
}).strict();
export const ReportUpdateManyWithWhereWithoutReporterInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutReporterInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutReporterInput>;
export const ReportUpdateManyWithWhereWithoutReporterInputObjectZodSchema = makeSchema();
