import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isVisible: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const HashtagUpdateInputObjectSchema: z.ZodType<Prisma.HashtagUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagUpdateInput>;
export const HashtagUpdateInputObjectZodSchema = makeSchema();
