import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { RoomWhereUniqueInputObjectSchema as RoomWhereUniqueInputObjectSchema } from "./objects/RoomWhereUniqueInput.schema";

export const RoomDeleteOneSchema: z.ZodType<Prisma.RoomDeleteArgs> = z
  .object({ where: RoomWhereUniqueInputObjectSchema })
  .strict() as unknown as z.ZodType<Prisma.RoomDeleteArgs>;

export const RoomDeleteOneZodSchema = z
  .object({ where: RoomWhereUniqueInputObjectSchema })
  .strict();
