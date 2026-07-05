import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { MessageUpdateInputObjectSchema as MessageUpdateInputObjectSchema } from "./objects/MessageUpdateInput.schema";
import { MessageUncheckedUpdateInputObjectSchema as MessageUncheckedUpdateInputObjectSchema } from "./objects/MessageUncheckedUpdateInput.schema";
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from "./objects/MessageWhereUniqueInput.schema";

export const MessageUpdateOneSchema: z.ZodType<Prisma.MessageUpdateArgs> = z
  .object({
    data: z.union([
      MessageUpdateInputObjectSchema,
      MessageUncheckedUpdateInputObjectSchema,
    ]),
    where: MessageWhereUniqueInputObjectSchema,
  })
  .strict() as unknown as z.ZodType<Prisma.MessageUpdateArgs>;

export const MessageUpdateOneZodSchema = z
  .object({
    data: z.union([
      MessageUpdateInputObjectSchema,
      MessageUncheckedUpdateInputObjectSchema,
    ]),
    where: MessageWhereUniqueInputObjectSchema,
  })
  .strict();
