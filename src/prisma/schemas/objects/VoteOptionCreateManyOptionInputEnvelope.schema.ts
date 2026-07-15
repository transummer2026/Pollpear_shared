import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionCreateManyOptionInputObjectSchema as VoteOptionCreateManyOptionInputObjectSchema } from './VoteOptionCreateManyOptionInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => VoteOptionCreateManyOptionInputObjectSchema), z.lazy(() => VoteOptionCreateManyOptionInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const VoteOptionCreateManyOptionInputEnvelopeObjectSchema: z.ZodType<Prisma.VoteOptionCreateManyOptionInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionCreateManyOptionInputEnvelope>;
export const VoteOptionCreateManyOptionInputEnvelopeObjectZodSchema = makeSchema();
