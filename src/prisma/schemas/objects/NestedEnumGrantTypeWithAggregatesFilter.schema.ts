import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { GrantTypeSchema } from "../enums/GrantType.schema";
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from "./NestedIntFilter.schema";
import { NestedEnumGrantTypeFilterObjectSchema as NestedEnumGrantTypeFilterObjectSchema } from "./NestedEnumGrantTypeFilter.schema";

const nestedenumgranttypewithaggregatesfilterSchema = z
  .object({
    equals: GrantTypeSchema.optional(),
    in: GrantTypeSchema.array().optional(),
    notIn: GrantTypeSchema.array().optional(),
    not: z
      .union([
        GrantTypeSchema,
        z.lazy(() => NestedEnumGrantTypeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumGrantTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumGrantTypeFilterObjectSchema).optional(),
  })
  .strict();
export const NestedEnumGrantTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumGrantTypeWithAggregatesFilter> =
  nestedenumgranttypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumGrantTypeWithAggregatesFilter>;
export const NestedEnumGrantTypeWithAggregatesFilterObjectZodSchema =
  nestedenumgranttypewithaggregatesfilterSchema;
