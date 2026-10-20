import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutHashtagInputObjectSchema as ReportUpdateWithoutHashtagInputObjectSchema } from './ReportUpdateWithoutHashtagInput.schema';
import { ReportUncheckedUpdateWithoutHashtagInputObjectSchema as ReportUncheckedUpdateWithoutHashtagInputObjectSchema } from './ReportUncheckedUpdateWithoutHashtagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateWithoutHashtagInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutHashtagInputObjectSchema)])
}).strict();
export const ReportUpdateWithWhereUniqueWithoutHashtagInputObjectSchema: z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutHashtagInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutHashtagInput>;
export const ReportUpdateWithWhereUniqueWithoutHashtagInputObjectZodSchema = makeSchema();
