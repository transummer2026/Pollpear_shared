import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionCreateManyPollInputObjectSchema as OptionCreateManyPollInputObjectSchema } from './OptionCreateManyPollInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => OptionCreateManyPollInputObjectSchema), z.lazy(() => OptionCreateManyPollInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const OptionCreateManyPollInputEnvelopeObjectSchema: z.ZodType<Prisma.OptionCreateManyPollInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.OptionCreateManyPollInputEnvelope>;
export const OptionCreateManyPollInputEnvelopeObjectZodSchema = makeSchema();
