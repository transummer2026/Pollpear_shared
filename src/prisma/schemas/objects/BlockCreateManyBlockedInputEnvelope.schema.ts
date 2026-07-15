import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BlockCreateManyBlockedInputObjectSchema as BlockCreateManyBlockedInputObjectSchema } from './BlockCreateManyBlockedInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => BlockCreateManyBlockedInputObjectSchema), z.lazy(() => BlockCreateManyBlockedInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const BlockCreateManyBlockedInputEnvelopeObjectSchema: z.ZodType<Prisma.BlockCreateManyBlockedInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.BlockCreateManyBlockedInputEnvelope>;
export const BlockCreateManyBlockedInputEnvelopeObjectZodSchema = makeSchema();
