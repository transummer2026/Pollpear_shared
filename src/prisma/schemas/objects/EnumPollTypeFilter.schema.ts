import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { PollTypeSchema } from "../enums/PollType.schema";
import { NestedEnumPollTypeFilterObjectSchema as NestedEnumPollTypeFilterObjectSchema } from "./NestedEnumPollTypeFilter.schema";

const makeSchema = () =>
  z
    .object({
      equals: PollTypeSchema.optional(),
      in: PollTypeSchema.array().optional(),
      notIn: PollTypeSchema.array().optional(),
      not: z
        .union([
          PollTypeSchema,
          z.lazy(() => NestedEnumPollTypeFilterObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const EnumPollTypeFilterObjectSchema: z.ZodType<Prisma.EnumPollTypeFilter> =
  makeSchema() as unknown as z.ZodType<Prisma.EnumPollTypeFilter>;
export const EnumPollTypeFilterObjectZodSchema = makeSchema();
