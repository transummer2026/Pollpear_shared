import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { VoteUpdateInputObjectSchema as VoteUpdateInputObjectSchema } from "./objects/VoteUpdateInput.schema";
import { VoteUncheckedUpdateInputObjectSchema as VoteUncheckedUpdateInputObjectSchema } from "./objects/VoteUncheckedUpdateInput.schema";
import { VoteWhereUniqueInputObjectSchema as VoteWhereUniqueInputObjectSchema } from "./objects/VoteWhereUniqueInput.schema";

export const VoteUpdateOneSchema: z.ZodType<Prisma.VoteUpdateArgs> = z
  .object({
    data: z.union([
      VoteUpdateInputObjectSchema,
      VoteUncheckedUpdateInputObjectSchema,
    ]),
    where: VoteWhereUniqueInputObjectSchema,
  })
  .strict() as unknown as z.ZodType<Prisma.VoteUpdateArgs>;

export const VoteUpdateOneZodSchema = z
  .object({
    data: z.union([
      VoteUpdateInputObjectSchema,
      VoteUncheckedUpdateInputObjectSchema,
    ]),
    where: VoteWhereUniqueInputObjectSchema,
  })
  .strict();
