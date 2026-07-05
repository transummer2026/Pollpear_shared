import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { RoomWhereUniqueInputObjectSchema as RoomWhereUniqueInputObjectSchema } from "./objects/RoomWhereUniqueInput.schema";

export const RoomFindUniqueSchema: z.ZodType<Prisma.RoomFindUniqueArgs> = z
  .object({ where: RoomWhereUniqueInputObjectSchema })
  .strict() as unknown as z.ZodType<Prisma.RoomFindUniqueArgs>;

export const RoomFindUniqueZodSchema = z
  .object({ where: RoomWhereUniqueInputObjectSchema })
  .strict();
