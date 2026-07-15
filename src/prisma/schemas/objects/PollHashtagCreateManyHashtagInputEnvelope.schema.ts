import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollHashtagCreateManyHashtagInputObjectSchema as PollHashtagCreateManyHashtagInputObjectSchema } from './PollHashtagCreateManyHashtagInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PollHashtagCreateManyHashtagInputObjectSchema), z.lazy(() => PollHashtagCreateManyHashtagInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PollHashtagCreateManyHashtagInputEnvelopeObjectSchema: z.ZodType<Prisma.PollHashtagCreateManyHashtagInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagCreateManyHashtagInputEnvelope>;
export const PollHashtagCreateManyHashtagInputEnvelopeObjectZodSchema = makeSchema();
