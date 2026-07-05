import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { RoomMemberUncheckedCreateInputObjectSchema as RoomMemberUncheckedCreateInputObjectSchema } from "./objects/RoomMemberUncheckedCreateInput.schema";

export const RoomMemberCreateOneSchema: z.ZodType<Prisma.RoomMemberCreateArgs> =
  z
    .object({ data: RoomMemberUncheckedCreateInputObjectSchema })
    .strict() as unknown as z.ZodType<Prisma.RoomMemberCreateArgs>;

export const RoomMemberCreateOneZodSchema = z
  .object({ data: RoomMemberUncheckedCreateInputObjectSchema })
  .strict();
