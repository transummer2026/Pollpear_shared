import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema";

const polldependencyscalarwhereinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => PollDependencyScalarWhereInputObjectSchema),
        z.lazy(() => PollDependencyScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PollDependencyScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PollDependencyScalarWhereInputObjectSchema),
        z.lazy(() => PollDependencyScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
      .optional(),
    childPollId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
      .optional(),
    optionId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
      .optional(),
  })
  .strict();
export const PollDependencyScalarWhereInputObjectSchema: z.ZodType<Prisma.PollDependencyScalarWhereInput> =
  polldependencyscalarwhereinputSchema as unknown as z.ZodType<Prisma.PollDependencyScalarWhereInput>;
export const PollDependencyScalarWhereInputObjectZodSchema =
  polldependencyscalarwhereinputSchema;
