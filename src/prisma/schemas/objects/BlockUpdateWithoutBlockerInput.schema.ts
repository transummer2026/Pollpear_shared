import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutBlocksReceivedNestedInputObjectSchema as UserUpdateOneRequiredWithoutBlocksReceivedNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutBlocksReceivedNestedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  blocked: z.lazy(() => UserUpdateOneRequiredWithoutBlocksReceivedNestedInputObjectSchema).optional()
}).strict();
export const BlockUpdateWithoutBlockerInputObjectSchema: z.ZodType<Prisma.BlockUpdateWithoutBlockerInput> = makeSchema() as unknown as z.ZodType<Prisma.BlockUpdateWithoutBlockerInput>;
export const BlockUpdateWithoutBlockerInputObjectZodSchema = makeSchema();
