import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { VoteOptionWhereUniqueInputObjectSchema as VoteOptionWhereUniqueInputObjectSchema } from "./objects/VoteOptionWhereUniqueInput.schema";

export const VoteOptionFindUniqueSchema: z.ZodType<Prisma.VoteOptionFindUniqueArgs> =
  z
    .object({ where: VoteOptionWhereUniqueInputObjectSchema })
    .strict() as unknown as z.ZodType<Prisma.VoteOptionFindUniqueArgs>;

export const VoteOptionFindUniqueZodSchema = z
  .object({ where: VoteOptionWhereUniqueInputObjectSchema })
  .strict();
