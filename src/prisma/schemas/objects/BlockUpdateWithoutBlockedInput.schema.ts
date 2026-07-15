import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutBlocksGivenNestedInputObjectSchema as UserUpdateOneRequiredWithoutBlocksGivenNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutBlocksGivenNestedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  blocker: z.lazy(() => UserUpdateOneRequiredWithoutBlocksGivenNestedInputObjectSchema).optional()
}).strict();
export const BlockUpdateWithoutBlockedInputObjectSchema: z.ZodType<Prisma.BlockUpdateWithoutBlockedInput> = makeSchema() as unknown as z.ZodType<Prisma.BlockUpdateWithoutBlockedInput>;
export const BlockUpdateWithoutBlockedInputObjectZodSchema = makeSchema();
