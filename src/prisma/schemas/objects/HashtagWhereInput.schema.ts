import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema";
import { StringFilterObjectSchema as StringFilterObjectSchema } from "./StringFilter.schema";
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from "./BoolFilter.schema";

const hashtagwhereinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => HashtagWhereInputObjectSchema),
        z.lazy(() => HashtagWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => HashtagWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => HashtagWhereInputObjectSchema),
        z.lazy(() => HashtagWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)])
      .optional(),
    isVisible: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
  })
  .strict();
export const HashtagWhereInputObjectSchema: z.ZodType<Prisma.HashtagWhereInput> =
  hashtagwhereinputSchema as unknown as z.ZodType<Prisma.HashtagWhereInput>;
export const HashtagWhereInputObjectZodSchema = hashtagwhereinputSchema;
