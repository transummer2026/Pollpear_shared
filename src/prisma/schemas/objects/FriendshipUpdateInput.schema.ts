import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { FriendshipStatusSchema } from "../enums/FriendshipStatus.schema";
import { EnumFriendshipStatusFieldUpdateOperationsInputObjectSchema as EnumFriendshipStatusFieldUpdateOperationsInputObjectSchema } from "./EnumFriendshipStatusFieldUpdateOperationsInput.schema";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";

const makeSchema = () =>
  z
    .object({
      status: z
        .union([
          FriendshipStatusSchema,
          z.lazy(
            () => EnumFriendshipStatusFieldUpdateOperationsInputObjectSchema,
          ),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      requesterId: z.number().int(),
      addresseeId: z.number().int(),
    })
    .strict();
export const FriendshipUpdateInputObjectSchema: z.ZodType<Prisma.FriendshipUpdateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.FriendshipUpdateInput>;
export const FriendshipUpdateInputObjectZodSchema = makeSchema();
