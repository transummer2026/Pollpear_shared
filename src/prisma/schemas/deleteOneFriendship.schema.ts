import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from "./objects/FriendshipWhereUniqueInput.schema";

export const FriendshipDeleteOneSchema: z.ZodType<Prisma.FriendshipDeleteArgs> =
  z
    .object({ where: FriendshipWhereUniqueInputObjectSchema })
    .strict() as unknown as z.ZodType<Prisma.FriendshipDeleteArgs>;

export const FriendshipDeleteOneZodSchema = z
  .object({ where: FriendshipWhereUniqueInputObjectSchema })
  .strict();
