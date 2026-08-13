import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipStatusSchema } from '../enums/FriendshipStatus.schema';
import { EnumFriendshipStatusFieldUpdateOperationsInputObjectSchema as EnumFriendshipStatusFieldUpdateOperationsInputObjectSchema } from './EnumFriendshipStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  status: z.union([FriendshipStatusSchema, z.lazy(() => EnumFriendshipStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const FriendshipUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.FriendshipUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUpdateManyMutationInput>;
export const FriendshipUpdateManyMutationInputObjectZodSchema = makeSchema();
