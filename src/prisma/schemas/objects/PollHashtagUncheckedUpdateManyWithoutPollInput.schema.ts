import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema";

const makeSchema = () =>
  z
    .object({
      hashtagId: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const PollHashtagUncheckedUpdateManyWithoutPollInputObjectSchema: z.ZodType<Prisma.PollHashtagUncheckedUpdateManyWithoutPollInput> =
  makeSchema() as unknown as z.ZodType<Prisma.PollHashtagUncheckedUpdateManyWithoutPollInput>;
export const PollHashtagUncheckedUpdateManyWithoutPollInputObjectZodSchema =
  makeSchema();
