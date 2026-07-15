import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportScalarWhereInputObjectSchema as ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema';
import { ReportUpdateManyMutationInputObjectSchema as ReportUpdateManyMutationInputObjectSchema } from './ReportUpdateManyMutationInput.schema';
import { ReportUncheckedUpdateManyWithoutHashtagInputObjectSchema as ReportUncheckedUpdateManyWithoutHashtagInputObjectSchema } from './ReportUncheckedUpdateManyWithoutHashtagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateManyMutationInputObjectSchema), z.lazy(() => ReportUncheckedUpdateManyWithoutHashtagInputObjectSchema)])
}).strict();
export const ReportUpdateManyWithWhereWithoutHashtagInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutHashtagInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutHashtagInput>;
export const ReportUpdateManyWithWhereWithoutHashtagInputObjectZodSchema = makeSchema();
