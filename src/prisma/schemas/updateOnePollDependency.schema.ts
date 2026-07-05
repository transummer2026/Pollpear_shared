import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { PollDependencyUpdateInputObjectSchema as PollDependencyUpdateInputObjectSchema } from "./objects/PollDependencyUpdateInput.schema";
import { PollDependencyUncheckedUpdateInputObjectSchema as PollDependencyUncheckedUpdateInputObjectSchema } from "./objects/PollDependencyUncheckedUpdateInput.schema";
import { PollDependencyWhereUniqueInputObjectSchema as PollDependencyWhereUniqueInputObjectSchema } from "./objects/PollDependencyWhereUniqueInput.schema";

export const PollDependencyUpdateOneSchema: z.ZodType<Prisma.PollDependencyUpdateArgs> =
  z
    .object({
      data: z.union([
        PollDependencyUpdateInputObjectSchema,
        PollDependencyUncheckedUpdateInputObjectSchema,
      ]),
      where: PollDependencyWhereUniqueInputObjectSchema,
    })
    .strict() as unknown as z.ZodType<Prisma.PollDependencyUpdateArgs>;

export const PollDependencyUpdateOneZodSchema = z
  .object({
    data: z.union([
      PollDependencyUpdateInputObjectSchema,
      PollDependencyUncheckedUpdateInputObjectSchema,
    ]),
    where: PollDependencyWhereUniqueInputObjectSchema,
  })
  .strict();
