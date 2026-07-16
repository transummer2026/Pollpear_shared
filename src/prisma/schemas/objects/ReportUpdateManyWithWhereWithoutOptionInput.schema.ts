import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportScalarWhereInputObjectSchema as ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema';
import { ReportUpdateManyMutationInputObjectSchema as ReportUpdateManyMutationInputObjectSchema } from './ReportUpdateManyMutationInput.schema';
import { ReportUncheckedUpdateManyWithoutOptionInputObjectSchema as ReportUncheckedUpdateManyWithoutOptionInputObjectSchema } from './ReportUncheckedUpdateManyWithoutOptionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateManyMutationInputObjectSchema), z.lazy(() => ReportUncheckedUpdateManyWithoutOptionInputObjectSchema)])
}).strict();
export const ReportUpdateManyWithWhereWithoutOptionInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutOptionInput>;
export const ReportUpdateManyWithWhereWithoutOptionInputObjectZodSchema = makeSchema();
