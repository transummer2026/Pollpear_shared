import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { FriendshipRequesterIdAddresseeIdCompoundUniqueInputObjectSchema as FriendshipRequesterIdAddresseeIdCompoundUniqueInputObjectSchema } from "./FriendshipRequesterIdAddresseeIdCompoundUniqueInput.schema";

const makeSchema = () =>
  z
    .object({
      id: z.number().int().optional(),
      requesterId_addresseeId: z
        .lazy(
          () => FriendshipRequesterIdAddresseeIdCompoundUniqueInputObjectSchema,
        )
        .optional(),
    })
    .strict();
export const FriendshipWhereUniqueInputObjectSchema: z.ZodType<Prisma.FriendshipWhereUniqueInput> =
  makeSchema() as unknown as z.ZodType<Prisma.FriendshipWhereUniqueInput>;
export const FriendshipWhereUniqueInputObjectZodSchema = makeSchema();
