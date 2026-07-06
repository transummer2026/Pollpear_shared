import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema";

const polldependencywhereinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => PollDependencyWhereInputObjectSchema),
        z.lazy(() => PollDependencyWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PollDependencyWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PollDependencyWhereInputObjectSchema),
        z.lazy(() => PollDependencyWhereInputObjectSchema).array(),
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
export const PollDependencyWhereInputObjectSchema: z.ZodType<Prisma.PollDependencyWhereInput> =
  polldependencywhereinputSchema as unknown as z.ZodType<Prisma.PollDependencyWhereInput>;
export const PollDependencyWhereInputObjectZodSchema =
  polldependencywhereinputSchema;
