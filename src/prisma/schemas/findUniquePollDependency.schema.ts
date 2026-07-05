import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { PollDependencyWhereUniqueInputObjectSchema as PollDependencyWhereUniqueInputObjectSchema } from "./objects/PollDependencyWhereUniqueInput.schema";

export const PollDependencyFindUniqueSchema: z.ZodType<Prisma.PollDependencyFindUniqueArgs> =
  z
    .object({ where: PollDependencyWhereUniqueInputObjectSchema })
    .strict() as unknown as z.ZodType<Prisma.PollDependencyFindUniqueArgs>;

export const PollDependencyFindUniqueZodSchema = z
  .object({ where: PollDependencyWhereUniqueInputObjectSchema })
  .strict();
