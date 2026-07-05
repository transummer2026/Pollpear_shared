import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { PollDependencyWhereUniqueInputObjectSchema as PollDependencyWhereUniqueInputObjectSchema } from "./objects/PollDependencyWhereUniqueInput.schema";

export const PollDependencyDeleteOneSchema: z.ZodType<Prisma.PollDependencyDeleteArgs> =
  z
    .object({ where: PollDependencyWhereUniqueInputObjectSchema })
    .strict() as unknown as z.ZodType<Prisma.PollDependencyDeleteArgs>;

export const PollDependencyDeleteOneZodSchema = z
  .object({ where: PollDependencyWhereUniqueInputObjectSchema })
  .strict();
