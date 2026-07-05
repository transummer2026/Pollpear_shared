import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { PollStatusSchema } from "../enums/PollStatus.schema";
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from "./NestedIntFilter.schema";
import { NestedEnumPollStatusFilterObjectSchema as NestedEnumPollStatusFilterObjectSchema } from "./NestedEnumPollStatusFilter.schema";

const nestedenumpollstatuswithaggregatesfilterSchema = z
  .object({
    equals: PollStatusSchema.optional(),
    in: PollStatusSchema.array().optional(),
    notIn: PollStatusSchema.array().optional(),
    not: z
      .union([
        PollStatusSchema,
        z.lazy(() => NestedEnumPollStatusWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumPollStatusFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumPollStatusFilterObjectSchema).optional(),
  })
  .strict();
export const NestedEnumPollStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumPollStatusWithAggregatesFilter> =
  nestedenumpollstatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumPollStatusWithAggregatesFilter>;
export const NestedEnumPollStatusWithAggregatesFilterObjectZodSchema =
  nestedenumpollstatuswithaggregatesfilterSchema;
