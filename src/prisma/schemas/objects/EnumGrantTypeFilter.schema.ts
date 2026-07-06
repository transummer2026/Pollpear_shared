import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { GrantTypeSchema } from "../enums/GrantType.schema";
import { NestedEnumGrantTypeFilterObjectSchema as NestedEnumGrantTypeFilterObjectSchema } from "./NestedEnumGrantTypeFilter.schema";

const makeSchema = () =>
  z
    .object({
      equals: GrantTypeSchema.optional(),
      in: GrantTypeSchema.array().optional(),
      notIn: GrantTypeSchema.array().optional(),
      not: z
        .union([
          GrantTypeSchema,
          z.lazy(() => NestedEnumGrantTypeFilterObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const EnumGrantTypeFilterObjectSchema: z.ZodType<Prisma.EnumGrantTypeFilter> =
  makeSchema() as unknown as z.ZodType<Prisma.EnumGrantTypeFilter>;
export const EnumGrantTypeFilterObjectZodSchema = makeSchema();
