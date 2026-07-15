import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const BlockUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.BlockUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.BlockUpdateManyMutationInput>;
export const BlockUpdateManyMutationInputObjectZodSchema = makeSchema();
