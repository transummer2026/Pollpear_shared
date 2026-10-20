import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanCreateManyUserInputObjectSchema as BanCreateManyUserInputObjectSchema } from './BanCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => BanCreateManyUserInputObjectSchema), z.lazy(() => BanCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const BanCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.BanCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.BanCreateManyUserInputEnvelope>;
export const BanCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
