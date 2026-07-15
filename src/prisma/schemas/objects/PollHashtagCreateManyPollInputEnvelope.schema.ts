import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollHashtagCreateManyPollInputObjectSchema as PollHashtagCreateManyPollInputObjectSchema } from './PollHashtagCreateManyPollInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PollHashtagCreateManyPollInputObjectSchema), z.lazy(() => PollHashtagCreateManyPollInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PollHashtagCreateManyPollInputEnvelopeObjectSchema: z.ZodType<Prisma.PollHashtagCreateManyPollInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagCreateManyPollInputEnvelope>;
export const PollHashtagCreateManyPollInputEnvelopeObjectZodSchema = makeSchema();
