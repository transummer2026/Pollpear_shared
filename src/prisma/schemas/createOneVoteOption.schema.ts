import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { VoteOptionUncheckedCreateInputObjectSchema as VoteOptionUncheckedCreateInputObjectSchema } from "./objects/VoteOptionUncheckedCreateInput.schema";

export const VoteOptionCreateOneSchema: z.ZodType<Prisma.VoteOptionCreateArgs> =
  z
    .object({ data: VoteOptionUncheckedCreateInputObjectSchema })
    .strict() as unknown as z.ZodType<Prisma.VoteOptionCreateArgs>;

export const VoteOptionCreateOneZodSchema = z
  .object({ data: VoteOptionUncheckedCreateInputObjectSchema })
  .strict();
