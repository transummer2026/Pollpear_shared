import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateManyRoomInputObjectSchema as PollCreateManyRoomInputObjectSchema } from './PollCreateManyRoomInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PollCreateManyRoomInputObjectSchema), z.lazy(() => PollCreateManyRoomInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PollCreateManyRoomInputEnvelopeObjectSchema: z.ZodType<Prisma.PollCreateManyRoomInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PollCreateManyRoomInputEnvelope>;
export const PollCreateManyRoomInputEnvelopeObjectZodSchema = makeSchema();
