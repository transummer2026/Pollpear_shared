import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipStatusSchema } from '../enums/FriendshipStatus.schema';
import { EnumFriendshipStatusFieldUpdateOperationsInputObjectSchema as EnumFriendshipStatusFieldUpdateOperationsInputObjectSchema } from './EnumFriendshipStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutFriendshipsReceivedNestedInputObjectSchema as UserUpdateOneRequiredWithoutFriendshipsReceivedNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutFriendshipsReceivedNestedInput.schema'

const makeSchema = () => z.object({
  status: z.union([FriendshipStatusSchema, z.lazy(() => EnumFriendshipStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  addressee: z.lazy(() => UserUpdateOneRequiredWithoutFriendshipsReceivedNestedInputObjectSchema).optional()
}).strict();
export const FriendshipUpdateWithoutRequesterInputObjectSchema: z.ZodType<Prisma.FriendshipUpdateWithoutRequesterInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUpdateWithoutRequesterInput>;
export const FriendshipUpdateWithoutRequesterInputObjectZodSchema = makeSchema();
