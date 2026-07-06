import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { VoteWhereUniqueInputObjectSchema as VoteWhereUniqueInputObjectSchema } from "./objects/VoteWhereUniqueInput.schema";

export const VoteFindUniqueSchema: z.ZodType<Prisma.VoteFindUniqueArgs> = z
  .object({ where: VoteWhereUniqueInputObjectSchema })
  .strict() as unknown as z.ZodType<Prisma.VoteFindUniqueArgs>;

export const VoteFindUniqueZodSchema = z
  .object({ where: VoteWhereUniqueInputObjectSchema })
  .strict();
