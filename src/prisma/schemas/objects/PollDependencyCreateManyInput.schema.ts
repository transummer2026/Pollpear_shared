import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      id: z.number().int().optional(),
      childPollId: z.number().int(),
      optionId: z.number().int(),
    })
    .strict();
export const PollDependencyCreateManyInputObjectSchema: z.ZodType<Prisma.PollDependencyCreateManyInput> =
  makeSchema() as unknown as z.ZodType<Prisma.PollDependencyCreateManyInput>;
export const PollDependencyCreateManyInputObjectZodSchema = makeSchema();
