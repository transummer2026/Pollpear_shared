import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BlockCreateManyBlockerInputObjectSchema as BlockCreateManyBlockerInputObjectSchema } from './BlockCreateManyBlockerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => BlockCreateManyBlockerInputObjectSchema), z.lazy(() => BlockCreateManyBlockerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const BlockCreateManyBlockerInputEnvelopeObjectSchema: z.ZodType<Prisma.BlockCreateManyBlockerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.BlockCreateManyBlockerInputEnvelope>;
export const BlockCreateManyBlockerInputEnvelopeObjectZodSchema = makeSchema();
