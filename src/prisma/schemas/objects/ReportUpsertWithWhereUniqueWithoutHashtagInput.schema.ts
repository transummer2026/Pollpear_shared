import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutHashtagInputObjectSchema as ReportUpdateWithoutHashtagInputObjectSchema } from './ReportUpdateWithoutHashtagInput.schema';
import { ReportUncheckedUpdateWithoutHashtagInputObjectSchema as ReportUncheckedUpdateWithoutHashtagInputObjectSchema } from './ReportUncheckedUpdateWithoutHashtagInput.schema';
import { ReportCreateWithoutHashtagInputObjectSchema as ReportCreateWithoutHashtagInputObjectSchema } from './ReportCreateWithoutHashtagInput.schema';
import { ReportUncheckedCreateWithoutHashtagInputObjectSchema as ReportUncheckedCreateWithoutHashtagInputObjectSchema } from './ReportUncheckedCreateWithoutHashtagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportUpdateWithoutHashtagInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutHashtagInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutHashtagInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutHashtagInputObjectSchema)])
}).strict();
export const ReportUpsertWithWhereUniqueWithoutHashtagInputObjectSchema: z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutHashtagInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutHashtagInput>;
export const ReportUpsertWithWhereUniqueWithoutHashtagInputObjectZodSchema = makeSchema();
