import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { BanUncheckedCreateInputObjectSchema as BanUncheckedCreateInputObjectSchema } from "./objects/BanUncheckedCreateInput.schema";

export const BanCreateOneSchema: z.ZodType<Prisma.BanCreateArgs> = z
  .object({ data: BanUncheckedCreateInputObjectSchema })
  .strict() as unknown as z.ZodType<Prisma.BanCreateArgs>;

export const BanCreateOneZodSchema = z
  .object({ data: BanUncheckedCreateInputObjectSchema })
  .strict();
