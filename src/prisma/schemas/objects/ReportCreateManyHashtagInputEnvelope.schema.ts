import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportCreateManyHashtagInputObjectSchema as ReportCreateManyHashtagInputObjectSchema } from './ReportCreateManyHashtagInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportCreateManyHashtagInputObjectSchema), z.lazy(() => ReportCreateManyHashtagInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportCreateManyHashtagInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportCreateManyHashtagInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateManyHashtagInputEnvelope>;
export const ReportCreateManyHashtagInputEnvelopeObjectZodSchema = makeSchema();
