import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { PollTypeSchema } from "../enums/PollType.schema";
import { NestedEnumPollTypeWithAggregatesFilterObjectSchema as NestedEnumPollTypeWithAggregatesFilterObjectSchema } from "./NestedEnumPollTypeWithAggregatesFilter.schema";
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from "./NestedIntFilter.schema";
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
          z.lazy(() => NestedEnumPollTypeWithAggregatesFilterObjectSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
      _min: z.lazy(() => NestedEnumPollTypeFilterObjectSchema).optional(),
      _max: z.lazy(() => NestedEnumPollTypeFilterObjectSchema).optional(),
    })
    .strict();
export const EnumPollTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumPollTypeWithAggregatesFilter> =
  makeSchema() as unknown as z.ZodType<Prisma.EnumPollTypeWithAggregatesFilter>;
export const EnumPollTypeWithAggregatesFilterObjectZodSchema = makeSchema();
