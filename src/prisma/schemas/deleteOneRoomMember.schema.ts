import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { RoomMemberWhereUniqueInputObjectSchema as RoomMemberWhereUniqueInputObjectSchema } from "./objects/RoomMemberWhereUniqueInput.schema";

export const RoomMemberDeleteOneSchema: z.ZodType<Prisma.RoomMemberDeleteArgs> =
  z
    .object({ where: RoomMemberWhereUniqueInputObjectSchema })
    .strict() as unknown as z.ZodType<Prisma.RoomMemberDeleteArgs>;

export const RoomMemberDeleteOneZodSchema = z
  .object({ where: RoomMemberWhereUniqueInputObjectSchema })
  .strict();
