import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollDependencyCreateManyOptionInputObjectSchema as PollDependencyCreateManyOptionInputObjectSchema } from './PollDependencyCreateManyOptionInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PollDependencyCreateManyOptionInputObjectSchema), z.lazy(() => PollDependencyCreateManyOptionInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PollDependencyCreateManyOptionInputEnvelopeObjectSchema: z.ZodType<Prisma.PollDependencyCreateManyOptionInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyCreateManyOptionInputEnvelope>;
export const PollDependencyCreateManyOptionInputEnvelopeObjectZodSchema = makeSchema();
