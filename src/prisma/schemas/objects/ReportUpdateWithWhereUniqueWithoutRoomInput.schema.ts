import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutRoomInputObjectSchema as ReportUpdateWithoutRoomInputObjectSchema } from './ReportUpdateWithoutRoomInput.schema';
import { ReportUncheckedUpdateWithoutRoomInputObjectSchema as ReportUncheckedUpdateWithoutRoomInputObjectSchema } from './ReportUncheckedUpdateWithoutRoomInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateWithoutRoomInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutRoomInputObjectSchema)])
}).strict();
export const ReportUpdateWithWhereUniqueWithoutRoomInputObjectSchema: z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutRoomInput>;
export const ReportUpdateWithWhereUniqueWithoutRoomInputObjectZodSchema = makeSchema();
