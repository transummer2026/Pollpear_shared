import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutRoomInputObjectSchema as ReportUpdateWithoutRoomInputObjectSchema } from './ReportUpdateWithoutRoomInput.schema';
import { ReportUncheckedUpdateWithoutRoomInputObjectSchema as ReportUncheckedUpdateWithoutRoomInputObjectSchema } from './ReportUncheckedUpdateWithoutRoomInput.schema';
import { ReportCreateWithoutRoomInputObjectSchema as ReportCreateWithoutRoomInputObjectSchema } from './ReportCreateWithoutRoomInput.schema';
import { ReportUncheckedCreateWithoutRoomInputObjectSchema as ReportUncheckedCreateWithoutRoomInputObjectSchema } from './ReportUncheckedCreateWithoutRoomInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportUpdateWithoutRoomInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutRoomInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutRoomInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutRoomInputObjectSchema)])
}).strict();
export const ReportUpsertWithWhereUniqueWithoutRoomInputObjectSchema: z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutRoomInput>;
export const ReportUpsertWithWhereUniqueWithoutRoomInputObjectZodSchema = makeSchema();
