import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema";

const makeSchema = () =>
  z
    .object({
      id: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      childPollId: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      optionId: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const PollDependencyUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.PollDependencyUncheckedUpdateManyInput> =
  makeSchema() as unknown as z.ZodType<Prisma.PollDependencyUncheckedUpdateManyInput>;
export const PollDependencyUncheckedUpdateManyInputObjectZodSchema =
  makeSchema();
