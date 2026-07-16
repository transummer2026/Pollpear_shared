import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportCreateWithoutHashtagInputObjectSchema as ReportCreateWithoutHashtagInputObjectSchema } from './ReportCreateWithoutHashtagInput.schema';
import { ReportUncheckedCreateWithoutHashtagInputObjectSchema as ReportUncheckedCreateWithoutHashtagInputObjectSchema } from './ReportUncheckedCreateWithoutHashtagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutHashtagInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutHashtagInputObjectSchema)])
}).strict();
export const ReportCreateOrConnectWithoutHashtagInputObjectSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutHashtagInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateOrConnectWithoutHashtagInput>;
export const ReportCreateOrConnectWithoutHashtagInputObjectZodSchema = makeSchema();
