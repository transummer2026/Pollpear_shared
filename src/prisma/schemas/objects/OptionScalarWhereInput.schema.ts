import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema";
import { StringFilterObjectSchema as StringFilterObjectSchema } from "./StringFilter.schema";
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from "./BoolFilter.schema";

const optionscalarwhereinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => OptionScalarWhereInputObjectSchema),
        z.lazy(() => OptionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => OptionScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => OptionScalarWhereInputObjectSchema),
        z.lazy(() => OptionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
      .optional(),
    label: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    sliderLeftLabel: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    sliderRightLabel: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    order: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
      .optional(),
    isDeleted: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    pollId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
      .optional(),
  })
  .strict();
export const OptionScalarWhereInputObjectSchema: z.ZodType<Prisma.OptionScalarWhereInput> =
  optionscalarwhereinputSchema as unknown as z.ZodType<Prisma.OptionScalarWhereInput>;
export const OptionScalarWhereInputObjectZodSchema =
  optionscalarwhereinputSchema;
