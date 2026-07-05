import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { VisibilitySchema } from "../enums/Visibility.schema";

const nestedenumvisibilitynullablefilterSchema = z
  .object({
    equals: VisibilitySchema.optional().nullable(),
    in: VisibilitySchema.array().optional().nullable(),
    notIn: VisibilitySchema.array().optional().nullable(),
    not: z
      .union([
        VisibilitySchema,
        z.lazy(() => NestedEnumVisibilityNullableFilterObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();
export const NestedEnumVisibilityNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumVisibilityNullableFilter> =
  nestedenumvisibilitynullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumVisibilityNullableFilter>;
export const NestedEnumVisibilityNullableFilterObjectZodSchema =
  nestedenumvisibilitynullablefilterSchema;
