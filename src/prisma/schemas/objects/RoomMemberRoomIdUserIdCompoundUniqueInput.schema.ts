import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      roomId: z.number().int(),
      userId: z.number().int(),
    })
    .strict();
export const RoomMemberRoomIdUserIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.RoomMemberRoomIdUserIdCompoundUniqueInput> =
  makeSchema() as unknown as z.ZodType<Prisma.RoomMemberRoomIdUserIdCompoundUniqueInput>;
export const RoomMemberRoomIdUserIdCompoundUniqueInputObjectZodSchema =
  makeSchema();
