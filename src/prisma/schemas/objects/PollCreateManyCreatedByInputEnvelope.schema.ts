import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateManyCreatedByInputObjectSchema as PollCreateManyCreatedByInputObjectSchema } from './PollCreateManyCreatedByInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PollCreateManyCreatedByInputObjectSchema), z.lazy(() => PollCreateManyCreatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PollCreateManyCreatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.PollCreateManyCreatedByInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PollCreateManyCreatedByInputEnvelope>;
export const PollCreateManyCreatedByInputEnvelopeObjectZodSchema = makeSchema();
