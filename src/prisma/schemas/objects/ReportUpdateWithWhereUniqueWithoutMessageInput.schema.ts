import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutMessageInputObjectSchema as ReportUpdateWithoutMessageInputObjectSchema } from './ReportUpdateWithoutMessageInput.schema';
import { ReportUncheckedUpdateWithoutMessageInputObjectSchema as ReportUncheckedUpdateWithoutMessageInputObjectSchema } from './ReportUncheckedUpdateWithoutMessageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateWithoutMessageInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutMessageInputObjectSchema)])
}).strict();
export const ReportUpdateWithWhereUniqueWithoutMessageInputObjectSchema: z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutMessageInput>;
export const ReportUpdateWithWhereUniqueWithoutMessageInputObjectZodSchema = makeSchema();
