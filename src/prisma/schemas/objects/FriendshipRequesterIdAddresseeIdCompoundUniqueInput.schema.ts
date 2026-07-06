import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      requesterId: z.number().int(),
      addresseeId: z.number().int(),
    })
    .strict();
export const FriendshipRequesterIdAddresseeIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.FriendshipRequesterIdAddresseeIdCompoundUniqueInput> =
  makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequesterIdAddresseeIdCompoundUniqueInput>;
export const FriendshipRequesterIdAddresseeIdCompoundUniqueInputObjectZodSchema =
  makeSchema();
