import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";

const makeSchema = () =>
  z
    .object({
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
      joinedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      roomId: z.number().int(),
      userId: z.number().int(),
    })
    .strict();
export const RoomMemberUpdateInputObjectSchema: z.ZodType<Prisma.RoomMemberUpdateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.RoomMemberUpdateInput>;
export const RoomMemberUpdateInputObjectZodSchema = makeSchema();
