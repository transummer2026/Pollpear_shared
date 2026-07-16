import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanCreateManyBannedByInputObjectSchema as BanCreateManyBannedByInputObjectSchema } from './BanCreateManyBannedByInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => BanCreateManyBannedByInputObjectSchema), z.lazy(() => BanCreateManyBannedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const BanCreateManyBannedByInputEnvelopeObjectSchema: z.ZodType<Prisma.BanCreateManyBannedByInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.BanCreateManyBannedByInputEnvelope>;
export const BanCreateManyBannedByInputEnvelopeObjectZodSchema = makeSchema();
