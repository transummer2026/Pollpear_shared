import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";

const blockscalarwhereinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => BlockScalarWhereInputObjectSchema),
        z.lazy(() => BlockScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BlockScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BlockScalarWhereInputObjectSchema),
        z.lazy(() => BlockScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    blockerId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
      .optional(),
    blockedId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
      .optional(),
  })
  .strict();
export const BlockScalarWhereInputObjectSchema: z.ZodType<Prisma.BlockScalarWhereInput> =
  blockscalarwhereinputSchema as unknown as z.ZodType<Prisma.BlockScalarWhereInput>;
export const BlockScalarWhereInputObjectZodSchema = blockscalarwhereinputSchema;
