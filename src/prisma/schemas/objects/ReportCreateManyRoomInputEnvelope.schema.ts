import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportCreateManyRoomInputObjectSchema as ReportCreateManyRoomInputObjectSchema } from './ReportCreateManyRoomInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportCreateManyRoomInputObjectSchema), z.lazy(() => ReportCreateManyRoomInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportCreateManyRoomInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportCreateManyRoomInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateManyRoomInputEnvelope>;
export const ReportCreateManyRoomInputEnvelopeObjectZodSchema = makeSchema();
