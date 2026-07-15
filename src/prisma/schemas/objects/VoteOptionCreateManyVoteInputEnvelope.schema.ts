import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionCreateManyVoteInputObjectSchema as VoteOptionCreateManyVoteInputObjectSchema } from './VoteOptionCreateManyVoteInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => VoteOptionCreateManyVoteInputObjectSchema), z.lazy(() => VoteOptionCreateManyVoteInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const VoteOptionCreateManyVoteInputEnvelopeObjectSchema: z.ZodType<Prisma.VoteOptionCreateManyVoteInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionCreateManyVoteInputEnvelope>;
export const VoteOptionCreateManyVoteInputEnvelopeObjectZodSchema = makeSchema();
