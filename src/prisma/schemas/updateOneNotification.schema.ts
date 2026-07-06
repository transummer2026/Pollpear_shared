import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { NotificationUpdateInputObjectSchema as NotificationUpdateInputObjectSchema } from "./objects/NotificationUpdateInput.schema";
import { NotificationUncheckedUpdateInputObjectSchema as NotificationUncheckedUpdateInputObjectSchema } from "./objects/NotificationUncheckedUpdateInput.schema";
import { NotificationWhereUniqueInputObjectSchema as NotificationWhereUniqueInputObjectSchema } from "./objects/NotificationWhereUniqueInput.schema";

export const NotificationUpdateOneSchema: z.ZodType<Prisma.NotificationUpdateArgs> =
  z
    .object({
      data: z.union([
        NotificationUpdateInputObjectSchema,
        NotificationUncheckedUpdateInputObjectSchema,
      ]),
      where: NotificationWhereUniqueInputObjectSchema,
    })
    .strict() as unknown as z.ZodType<Prisma.NotificationUpdateArgs>;

export const NotificationUpdateOneZodSchema = z
  .object({
    data: z.union([
      NotificationUpdateInputObjectSchema,
      NotificationUncheckedUpdateInputObjectSchema,
    ]),
    where: NotificationWhereUniqueInputObjectSchema,
  })
  .strict();
