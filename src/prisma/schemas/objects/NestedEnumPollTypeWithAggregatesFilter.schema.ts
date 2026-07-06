import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { PollTypeSchema } from "../enums/PollType.schema";
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from "./NestedIntFilter.schema";
import { NestedEnumPollTypeFilterObjectSchema as NestedEnumPollTypeFilterObjectSchema } from "./NestedEnumPollTypeFilter.schema";

const nestedenumpolltypewithaggregatesfilterSchema = z
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
export const NestedEnumPollTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumPollTypeWithAggregatesFilter> =
  nestedenumpolltypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumPollTypeWithAggregatesFilter>;
export const NestedEnumPollTypeWithAggregatesFilterObjectZodSchema =
  nestedenumpolltypewithaggregatesfilterSchema;
