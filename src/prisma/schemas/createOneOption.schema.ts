import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { OptionUncheckedCreateInputObjectSchema as OptionUncheckedCreateInputObjectSchema } from "./objects/OptionUncheckedCreateInput.schema";

export const OptionCreateOneSchema: z.ZodType<Prisma.OptionCreateArgs> = z
  .object({ data: OptionUncheckedCreateInputObjectSchema })
  .strict() as unknown as z.ZodType<Prisma.OptionCreateArgs>;

export const OptionCreateOneZodSchema = z
  .object({ data: OptionUncheckedCreateInputObjectSchema })
  .strict();
