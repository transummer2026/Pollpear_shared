import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from "./objects/PollWhereUniqueInput.schema";

export const PollDeleteOneSchema: z.ZodType<Prisma.PollDeleteArgs> = z
  .object({ where: PollWhereUniqueInputObjectSchema })
  .strict() as unknown as z.ZodType<Prisma.PollDeleteArgs>;

export const PollDeleteOneZodSchema = z
  .object({ where: PollWhereUniqueInputObjectSchema })
  .strict();
