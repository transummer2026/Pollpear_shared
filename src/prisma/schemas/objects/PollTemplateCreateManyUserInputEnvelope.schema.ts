import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollTemplateCreateManyUserInputObjectSchema as PollTemplateCreateManyUserInputObjectSchema } from './PollTemplateCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PollTemplateCreateManyUserInputObjectSchema), z.lazy(() => PollTemplateCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PollTemplateCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.PollTemplateCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateCreateManyUserInputEnvelope>;
export const PollTemplateCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
