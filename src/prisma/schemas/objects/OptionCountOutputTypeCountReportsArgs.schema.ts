import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportWhereInputObjectSchema as ReportWhereInputObjectSchema } from './ReportWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereInputObjectSchema).optional()
}).strict();
export const OptionCountOutputTypeCountReportsArgsObjectSchema = makeSchema();
export const OptionCountOutputTypeCountReportsArgsObjectZodSchema = makeSchema();
