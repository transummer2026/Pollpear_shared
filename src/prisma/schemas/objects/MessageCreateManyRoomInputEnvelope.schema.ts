import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { MessageCreateManyRoomInputObjectSchema as MessageCreateManyRoomInputObjectSchema } from './MessageCreateManyRoomInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MessageCreateManyRoomInputObjectSchema), z.lazy(() => MessageCreateManyRoomInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const MessageCreateManyRoomInputEnvelopeObjectSchema: z.ZodType<Prisma.MessageCreateManyRoomInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MessageCreateManyRoomInputEnvelope>;
export const MessageCreateManyRoomInputEnvelopeObjectZodSchema = makeSchema();
