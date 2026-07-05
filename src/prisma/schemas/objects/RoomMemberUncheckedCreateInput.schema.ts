import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      id: z.number().int().optional(),
      createdAt: z.coerce.date().optional(),
      joinedAt: z.coerce.date(),
      roomId: z.number().int(),
      userId: z.number().int(),
    })
    .strict();
export const RoomMemberUncheckedCreateInputObjectSchema: z.ZodType<Prisma.RoomMemberUncheckedCreateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.RoomMemberUncheckedCreateInput>;
export const RoomMemberUncheckedCreateInputObjectZodSchema = makeSchema();
