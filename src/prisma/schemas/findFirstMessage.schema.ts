import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { MessageOrderByWithRelationInputObjectSchema as MessageOrderByWithRelationInputObjectSchema } from "./objects/MessageOrderByWithRelationInput.schema";
import { MessageWhereInputObjectSchema as MessageWhereInputObjectSchema } from "./objects/MessageWhereInput.schema";
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from "./objects/MessageWhereUniqueInput.schema";
import { MessageScalarFieldEnumSchema } from "./enums/MessageScalarFieldEnum.schema";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MessageFindFirstSelectSchema: z.ZodType<Prisma.MessageSelect> = z
  .object({
    id: z.boolean().optional(),
    content: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    authorId: z.boolean().optional(),
    roomId: z.boolean().optional(),
    author: z.boolean().optional(),
    room: z.boolean().optional(),
    reports: z.boolean().optional(),
    _count: z.boolean().optional(),
  })
  .strict() as unknown as z.ZodType<Prisma.MessageSelect>;

export const MessageFindFirstSelectZodSchema = z
  .object({
    id: z.boolean().optional(),
    content: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    authorId: z.boolean().optional(),
    roomId: z.boolean().optional(),
    author: z.boolean().optional(),
    room: z.boolean().optional(),
    reports: z.boolean().optional(),
    _count: z.boolean().optional(),
  })
  .strict();

export const MessageFindFirstSchema: z.ZodType<Prisma.MessageFindFirstArgs> = z
  .object({
    select: MessageFindFirstSelectSchema.optional(),
    orderBy: z
      .union([
        MessageOrderByWithRelationInputObjectSchema,
        MessageOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: MessageWhereInputObjectSchema.optional(),
    cursor: MessageWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([
        MessageScalarFieldEnumSchema,
        MessageScalarFieldEnumSchema.array(),
      ])
      .optional(),
  })
  .strict() as unknown as z.ZodType<Prisma.MessageFindFirstArgs>;

export const MessageFindFirstZodSchema = z
  .object({
    select: MessageFindFirstSelectSchema.optional(),
    orderBy: z
      .union([
        MessageOrderByWithRelationInputObjectSchema,
        MessageOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: MessageWhereInputObjectSchema.optional(),
    cursor: MessageWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([
        MessageScalarFieldEnumSchema,
        MessageScalarFieldEnumSchema.array(),
      ])
      .optional(),
  })
  .strict();
