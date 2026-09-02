import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutMessageInputObjectSchema as ReportUpdateWithoutMessageInputObjectSchema } from './ReportUpdateWithoutMessageInput.schema';
import { ReportUncheckedUpdateWithoutMessageInputObjectSchema as ReportUncheckedUpdateWithoutMessageInputObjectSchema } from './ReportUncheckedUpdateWithoutMessageInput.schema';
import { ReportCreateWithoutMessageInputObjectSchema as ReportCreateWithoutMessageInputObjectSchema } from './ReportCreateWithoutMessageInput.schema';
import { ReportUncheckedCreateWithoutMessageInputObjectSchema as ReportUncheckedCreateWithoutMessageInputObjectSchema } from './ReportUncheckedCreateWithoutMessageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportUpdateWithoutMessageInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutMessageInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutMessageInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutMessageInputObjectSchema)])
}).strict();
export const ReportUpsertWithWhereUniqueWithoutMessageInputObjectSchema: z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutMessageInput>;
export const ReportUpsertWithWhereUniqueWithoutMessageInputObjectZodSchema = makeSchema();
