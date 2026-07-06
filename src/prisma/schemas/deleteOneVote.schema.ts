import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { VoteWhereUniqueInputObjectSchema as VoteWhereUniqueInputObjectSchema } from "./objects/VoteWhereUniqueInput.schema";

export const VoteDeleteOneSchema: z.ZodType<Prisma.VoteDeleteArgs> = z
  .object({ where: VoteWhereUniqueInputObjectSchema })
  .strict() as unknown as z.ZodType<Prisma.VoteDeleteArgs>;

export const VoteDeleteOneZodSchema = z
  .object({ where: VoteWhereUniqueInputObjectSchema })
  .strict();
