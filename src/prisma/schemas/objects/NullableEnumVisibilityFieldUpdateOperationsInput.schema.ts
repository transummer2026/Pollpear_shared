import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { VisibilitySchema } from "../enums/Visibility.schema";

const makeSchema = () =>
  z
    .object({
      set: VisibilitySchema.optional(),
    })
    .strict();
export const NullableEnumVisibilityFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumVisibilityFieldUpdateOperationsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.NullableEnumVisibilityFieldUpdateOperationsInput>;
export const NullableEnumVisibilityFieldUpdateOperationsInputObjectZodSchema =
  makeSchema();
