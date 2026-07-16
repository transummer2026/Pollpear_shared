import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportCreateWithoutMessageInputObjectSchema as ReportCreateWithoutMessageInputObjectSchema } from './ReportCreateWithoutMessageInput.schema';
import { ReportUncheckedCreateWithoutMessageInputObjectSchema as ReportUncheckedCreateWithoutMessageInputObjectSchema } from './ReportUncheckedCreateWithoutMessageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutMessageInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutMessageInputObjectSchema)])
}).strict();
export const ReportCreateOrConnectWithoutMessageInputObjectSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateOrConnectWithoutMessageInput>;
export const ReportCreateOrConnectWithoutMessageInputObjectZodSchema = makeSchema();
