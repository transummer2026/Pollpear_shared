import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { VoteUncheckedCreateInputObjectSchema as VoteUncheckedCreateInputObjectSchema } from "./objects/VoteUncheckedCreateInput.schema";

export const VoteCreateOneSchema: z.ZodType<Prisma.VoteCreateArgs> = z
  .object({ data: VoteUncheckedCreateInputObjectSchema })
  .strict() as unknown as z.ZodType<Prisma.VoteCreateArgs>;

export const VoteCreateOneZodSchema = z
  .object({ data: VoteUncheckedCreateInputObjectSchema })
  .strict();
