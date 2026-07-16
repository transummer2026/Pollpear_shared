import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollTypeSchema } from '../enums/PollType.schema'

const makeSchema = () => z.object({
  set: PollTypeSchema.optional()
}).strict();
export const EnumPollTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumPollTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumPollTypeFieldUpdateOperationsInput>;
export const EnumPollTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
