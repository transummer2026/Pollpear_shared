import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportCreateWithoutOptionInputObjectSchema as ReportCreateWithoutOptionInputObjectSchema } from './ReportCreateWithoutOptionInput.schema';
import { ReportUncheckedCreateWithoutOptionInputObjectSchema as ReportUncheckedCreateWithoutOptionInputObjectSchema } from './ReportUncheckedCreateWithoutOptionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutOptionInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutOptionInputObjectSchema)])
}).strict();
export const ReportCreateOrConnectWithoutOptionInputObjectSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateOrConnectWithoutOptionInput>;
export const ReportCreateOrConnectWithoutOptionInputObjectZodSchema = makeSchema();
