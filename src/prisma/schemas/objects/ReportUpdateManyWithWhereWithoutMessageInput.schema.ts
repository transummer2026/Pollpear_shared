import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportScalarWhereInputObjectSchema as ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema';
import { ReportUpdateManyMutationInputObjectSchema as ReportUpdateManyMutationInputObjectSchema } from './ReportUpdateManyMutationInput.schema';
import { ReportUncheckedUpdateManyWithoutMessageInputObjectSchema as ReportUncheckedUpdateManyWithoutMessageInputObjectSchema } from './ReportUncheckedUpdateManyWithoutMessageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateManyMutationInputObjectSchema), z.lazy(() => ReportUncheckedUpdateManyWithoutMessageInputObjectSchema)])
}).strict();
export const ReportUpdateManyWithWhereWithoutMessageInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutMessageInput>;
export const ReportUpdateManyWithWhereWithoutMessageInputObjectZodSchema = makeSchema();
