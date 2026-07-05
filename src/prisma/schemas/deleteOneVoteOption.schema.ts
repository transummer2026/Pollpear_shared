import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { VoteOptionWhereUniqueInputObjectSchema as VoteOptionWhereUniqueInputObjectSchema } from "./objects/VoteOptionWhereUniqueInput.schema";

export const VoteOptionDeleteOneSchema: z.ZodType<Prisma.VoteOptionDeleteArgs> =
  z
    .object({ where: VoteOptionWhereUniqueInputObjectSchema })
    .strict() as unknown as z.ZodType<Prisma.VoteOptionDeleteArgs>;

export const VoteOptionDeleteOneZodSchema = z
  .object({ where: VoteOptionWhereUniqueInputObjectSchema })
  .strict();
