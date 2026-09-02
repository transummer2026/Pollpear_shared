import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportCreateWithoutRoomInputObjectSchema as ReportCreateWithoutRoomInputObjectSchema } from './ReportCreateWithoutRoomInput.schema';
import { ReportUncheckedCreateWithoutRoomInputObjectSchema as ReportUncheckedCreateWithoutRoomInputObjectSchema } from './ReportUncheckedCreateWithoutRoomInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutRoomInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutRoomInputObjectSchema)])
}).strict();
export const ReportCreateOrConnectWithoutRoomInputObjectSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateOrConnectWithoutRoomInput>;
export const ReportCreateOrConnectWithoutRoomInputObjectZodSchema = makeSchema();
