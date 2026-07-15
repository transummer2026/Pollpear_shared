import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutBlocksGivenNestedInputObjectSchema as UserUpdateOneRequiredWithoutBlocksGivenNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutBlocksGivenNestedInput.schema';
import { UserUpdateOneRequiredWithoutBlocksReceivedNestedInputObjectSchema as UserUpdateOneRequiredWithoutBlocksReceivedNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutBlocksReceivedNestedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  blocker: z.lazy(() => UserUpdateOneRequiredWithoutBlocksGivenNestedInputObjectSchema).optional(),
  blocked: z.lazy(() => UserUpdateOneRequiredWithoutBlocksReceivedNestedInputObjectSchema).optional()
}).strict();
export const BlockUpdateInputObjectSchema: z.ZodType<Prisma.BlockUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.BlockUpdateInput>;
export const BlockUpdateInputObjectZodSchema = makeSchema();
