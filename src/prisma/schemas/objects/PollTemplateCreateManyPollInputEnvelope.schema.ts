import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollTemplateCreateManyPollInputObjectSchema as PollTemplateCreateManyPollInputObjectSchema } from './PollTemplateCreateManyPollInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PollTemplateCreateManyPollInputObjectSchema), z.lazy(() => PollTemplateCreateManyPollInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PollTemplateCreateManyPollInputEnvelopeObjectSchema: z.ZodType<Prisma.PollTemplateCreateManyPollInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateCreateManyPollInputEnvelope>;
export const PollTemplateCreateManyPollInputEnvelopeObjectZodSchema = makeSchema();
