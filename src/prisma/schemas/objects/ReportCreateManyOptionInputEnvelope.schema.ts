import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportCreateManyOptionInputObjectSchema as ReportCreateManyOptionInputObjectSchema } from './ReportCreateManyOptionInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportCreateManyOptionInputObjectSchema), z.lazy(() => ReportCreateManyOptionInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportCreateManyOptionInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportCreateManyOptionInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateManyOptionInputEnvelope>;
export const ReportCreateManyOptionInputEnvelopeObjectZodSchema = makeSchema();
