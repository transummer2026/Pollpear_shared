import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteCreateManyPollInputObjectSchema as VoteCreateManyPollInputObjectSchema } from './VoteCreateManyPollInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => VoteCreateManyPollInputObjectSchema), z.lazy(() => VoteCreateManyPollInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const VoteCreateManyPollInputEnvelopeObjectSchema: z.ZodType<Prisma.VoteCreateManyPollInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.VoteCreateManyPollInputEnvelope>;
export const VoteCreateManyPollInputEnvelopeObjectZodSchema = makeSchema();
