import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { OauthProviderSchema } from "../enums/OauthProvider.schema";
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from "./NestedIntFilter.schema";
import { NestedEnumOauthProviderFilterObjectSchema as NestedEnumOauthProviderFilterObjectSchema } from "./NestedEnumOauthProviderFilter.schema";

const nestedenumoauthproviderwithaggregatesfilterSchema = z
  .object({
    equals: OauthProviderSchema.optional(),
    in: OauthProviderSchema.array().optional(),
    notIn: OauthProviderSchema.array().optional(),
    not: z
      .union([
        OauthProviderSchema,
        z.lazy(() => NestedEnumOauthProviderWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumOauthProviderFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumOauthProviderFilterObjectSchema).optional(),
  })
  .strict();
export const NestedEnumOauthProviderWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumOauthProviderWithAggregatesFilter> =
  nestedenumoauthproviderwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumOauthProviderWithAggregatesFilter>;
export const NestedEnumOauthProviderWithAggregatesFilterObjectZodSchema =
  nestedenumoauthproviderwithaggregatesfilterSchema;
