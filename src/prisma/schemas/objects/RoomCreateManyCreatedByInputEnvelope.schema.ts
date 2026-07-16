import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomCreateManyCreatedByInputObjectSchema as RoomCreateManyCreatedByInputObjectSchema } from './RoomCreateManyCreatedByInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RoomCreateManyCreatedByInputObjectSchema), z.lazy(() => RoomCreateManyCreatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const RoomCreateManyCreatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.RoomCreateManyCreatedByInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RoomCreateManyCreatedByInputEnvelope>;
export const RoomCreateManyCreatedByInputEnvelopeObjectZodSchema = makeSchema();
