import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { VisibilitySchema } from "../enums/Visibility.schema";
import { RoomStatusSchema } from "../enums/RoomStatus.schema";

const makeSchema = () =>
  z
    .object({
      id: z.number().int().optional(),
      name: z.string().max(255),
      description: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      publishedAt: z.coerce.date().optional().nullable(),
      bannerUrl: z.string().max(255),
      visibility: VisibilitySchema,
      status: RoomStatusSchema,
      createdById: z.number().int(),
    })
    .strict();
export const RoomUncheckedCreateInputObjectSchema: z.ZodType<Prisma.RoomUncheckedCreateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.RoomUncheckedCreateInput>;
export const RoomUncheckedCreateInputObjectZodSchema = makeSchema();
