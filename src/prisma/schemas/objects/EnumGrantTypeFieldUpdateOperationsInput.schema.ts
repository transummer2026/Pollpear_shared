import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { GrantTypeSchema } from "../enums/GrantType.schema";

const makeSchema = () =>
  z
    .object({
      set: GrantTypeSchema.optional(),
    })
    .strict();
export const EnumGrantTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumGrantTypeFieldUpdateOperationsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.EnumGrantTypeFieldUpdateOperationsInput>;
export const EnumGrantTypeFieldUpdateOperationsInputObjectZodSchema =
  makeSchema();
