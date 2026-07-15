import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportCreateManyMessageInputObjectSchema as ReportCreateManyMessageInputObjectSchema } from './ReportCreateManyMessageInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportCreateManyMessageInputObjectSchema), z.lazy(() => ReportCreateManyMessageInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportCreateManyMessageInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportCreateManyMessageInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateManyMessageInputEnvelope>;
export const ReportCreateManyMessageInputEnvelopeObjectZodSchema = makeSchema();
