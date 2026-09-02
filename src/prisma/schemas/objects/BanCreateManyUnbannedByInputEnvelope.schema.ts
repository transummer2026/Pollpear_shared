import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanCreateManyUnbannedByInputObjectSchema as BanCreateManyUnbannedByInputObjectSchema } from './BanCreateManyUnbannedByInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => BanCreateManyUnbannedByInputObjectSchema), z.lazy(() => BanCreateManyUnbannedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const BanCreateManyUnbannedByInputEnvelopeObjectSchema: z.ZodType<Prisma.BanCreateManyUnbannedByInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.BanCreateManyUnbannedByInputEnvelope>;
export const BanCreateManyUnbannedByInputEnvelopeObjectZodSchema = makeSchema();
