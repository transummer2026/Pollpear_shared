import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollStatusSchema } from '../enums/PollStatus.schema'

const makeSchema = () => z.object({
  set: PollStatusSchema.optional()
}).strict();
export const EnumPollStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumPollStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumPollStatusFieldUpdateOperationsInput>;
export const EnumPollStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
