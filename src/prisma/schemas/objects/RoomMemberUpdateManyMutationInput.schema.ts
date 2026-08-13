import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  joinedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const RoomMemberUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.RoomMemberUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberUpdateManyMutationInput>;
export const RoomMemberUpdateManyMutationInputObjectZodSchema = makeSchema();
