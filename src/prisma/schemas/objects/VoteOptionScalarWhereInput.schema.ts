import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema";

const voteoptionscalarwhereinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => VoteOptionScalarWhereInputObjectSchema),
        z.lazy(() => VoteOptionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => VoteOptionScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => VoteOptionScalarWhereInputObjectSchema),
        z.lazy(() => VoteOptionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    voteId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
      .optional(),
    optionId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
      .optional(),
  })
  .strict();
export const VoteOptionScalarWhereInputObjectSchema: z.ZodType<Prisma.VoteOptionScalarWhereInput> =
  voteoptionscalarwhereinputSchema as unknown as z.ZodType<Prisma.VoteOptionScalarWhereInput>;
export const VoteOptionScalarWhereInputObjectZodSchema =
  voteoptionscalarwhereinputSchema;
