import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { MessageCreateManyAuthorInputObjectSchema as MessageCreateManyAuthorInputObjectSchema } from './MessageCreateManyAuthorInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MessageCreateManyAuthorInputObjectSchema), z.lazy(() => MessageCreateManyAuthorInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const MessageCreateManyAuthorInputEnvelopeObjectSchema: z.ZodType<Prisma.MessageCreateManyAuthorInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MessageCreateManyAuthorInputEnvelope>;
export const MessageCreateManyAuthorInputEnvelopeObjectZodSchema = makeSchema();
