import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteCreateManyCreatedByInputObjectSchema as VoteCreateManyCreatedByInputObjectSchema } from './VoteCreateManyCreatedByInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => VoteCreateManyCreatedByInputObjectSchema), z.lazy(() => VoteCreateManyCreatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const VoteCreateManyCreatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.VoteCreateManyCreatedByInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.VoteCreateManyCreatedByInputEnvelope>;
export const VoteCreateManyCreatedByInputEnvelopeObjectZodSchema = makeSchema();
