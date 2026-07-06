import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { OptionWhereUniqueInputObjectSchema as OptionWhereUniqueInputObjectSchema } from "./objects/OptionWhereUniqueInput.schema";

export const OptionDeleteOneSchema: z.ZodType<Prisma.OptionDeleteArgs> = z
  .object({ where: OptionWhereUniqueInputObjectSchema })
  .strict() as unknown as z.ZodType<Prisma.OptionDeleteArgs>;

export const OptionDeleteOneZodSchema = z
  .object({ where: OptionWhereUniqueInputObjectSchema })
  .strict();
