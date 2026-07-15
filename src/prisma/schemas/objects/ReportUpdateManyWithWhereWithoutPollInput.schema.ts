import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportScalarWhereInputObjectSchema as ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema';
import { ReportUpdateManyMutationInputObjectSchema as ReportUpdateManyMutationInputObjectSchema } from './ReportUpdateManyMutationInput.schema';
import { ReportUncheckedUpdateManyWithoutPollInputObjectSchema as ReportUncheckedUpdateManyWithoutPollInputObjectSchema } from './ReportUncheckedUpdateManyWithoutPollInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateManyMutationInputObjectSchema), z.lazy(() => ReportUncheckedUpdateManyWithoutPollInputObjectSchema)])
}).strict();
export const ReportUpdateManyWithWhereWithoutPollInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutPollInput>;
export const ReportUpdateManyWithWhereWithoutPollInputObjectZodSchema = makeSchema();
