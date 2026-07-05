import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from "./objects/FriendshipWhereUniqueInput.schema";

export const FriendshipFindUniqueSchema: z.ZodType<Prisma.FriendshipFindUniqueArgs> =
  z
    .object({ where: FriendshipWhereUniqueInputObjectSchema })
    .strict() as unknown as z.ZodType<Prisma.FriendshipFindUniqueArgs>;

export const FriendshipFindUniqueZodSchema = z
  .object({ where: FriendshipWhereUniqueInputObjectSchema })
  .strict();
