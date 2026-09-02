import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportScalarWhereInputObjectSchema as ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema';
import { ReportUpdateManyMutationInputObjectSchema as ReportUpdateManyMutationInputObjectSchema } from './ReportUpdateManyMutationInput.schema';
import { ReportUncheckedUpdateManyWithoutReportedInputObjectSchema as ReportUncheckedUpdateManyWithoutReportedInputObjectSchema } from './ReportUncheckedUpdateManyWithoutReportedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateManyMutationInputObjectSchema), z.lazy(() => ReportUncheckedUpdateManyWithoutReportedInputObjectSchema)])
}).strict();
export const ReportUpdateManyWithWhereWithoutReportedInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutReportedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutReportedInput>;
export const ReportUpdateManyWithWhereWithoutReportedInputObjectZodSchema = makeSchema();
