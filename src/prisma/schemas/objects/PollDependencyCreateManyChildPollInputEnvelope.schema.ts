import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollDependencyCreateManyChildPollInputObjectSchema as PollDependencyCreateManyChildPollInputObjectSchema } from './PollDependencyCreateManyChildPollInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PollDependencyCreateManyChildPollInputObjectSchema), z.lazy(() => PollDependencyCreateManyChildPollInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PollDependencyCreateManyChildPollInputEnvelopeObjectSchema: z.ZodType<Prisma.PollDependencyCreateManyChildPollInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyCreateManyChildPollInputEnvelope>;
export const PollDependencyCreateManyChildPollInputEnvelopeObjectZodSchema = makeSchema();
