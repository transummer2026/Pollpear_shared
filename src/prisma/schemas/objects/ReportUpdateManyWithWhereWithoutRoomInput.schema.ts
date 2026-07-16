import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportScalarWhereInputObjectSchema as ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema';
import { ReportUpdateManyMutationInputObjectSchema as ReportUpdateManyMutationInputObjectSchema } from './ReportUpdateManyMutationInput.schema';
import { ReportUncheckedUpdateManyWithoutRoomInputObjectSchema as ReportUncheckedUpdateManyWithoutRoomInputObjectSchema } from './ReportUncheckedUpdateManyWithoutRoomInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateManyMutationInputObjectSchema), z.lazy(() => ReportUncheckedUpdateManyWithoutRoomInputObjectSchema)])
}).strict();
export const ReportUpdateManyWithWhereWithoutRoomInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutRoomInput>;
export const ReportUpdateManyWithWhereWithoutRoomInputObjectZodSchema = makeSchema();
