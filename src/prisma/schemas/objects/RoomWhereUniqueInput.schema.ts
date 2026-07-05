import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      id: z.number().int().optional(),
    })
    .strict();
export const RoomWhereUniqueInputObjectSchema: z.ZodType<Prisma.RoomWhereUniqueInput> =
  makeSchema() as unknown as z.ZodType<Prisma.RoomWhereUniqueInput>;
export const RoomWhereUniqueInputObjectZodSchema = makeSchema();
