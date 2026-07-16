import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportCreateManyPollInputObjectSchema as ReportCreateManyPollInputObjectSchema } from './ReportCreateManyPollInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportCreateManyPollInputObjectSchema), z.lazy(() => ReportCreateManyPollInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportCreateManyPollInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportCreateManyPollInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateManyPollInputEnvelope>;
export const ReportCreateManyPollInputEnvelopeObjectZodSchema = makeSchema();
