import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { FriendshipOrderByWithRelationInputObjectSchema as FriendshipOrderByWithRelationInputObjectSchema } from "./objects/FriendshipOrderByWithRelationInput.schema";
import { FriendshipWhereInputObjectSchema as FriendshipWhereInputObjectSchema } from "./objects/FriendshipWhereInput.schema";
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from "./objects/FriendshipWhereUniqueInput.schema";
import { FriendshipScalarFieldEnumSchema } from "./enums/FriendshipScalarFieldEnum.schema";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FriendshipFindFirstSelectSchema: z.ZodType<Prisma.FriendshipSelect> =
  z
    .object({
      id: z.boolean().optional(),
      status: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
      requesterId: z.boolean().optional(),
      addresseeId: z.boolean().optional(),
      requester: z.boolean().optional(),
      addressee: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.FriendshipSelect>;

export const FriendshipFindFirstSelectZodSchema = z
  .object({
    id: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    requesterId: z.boolean().optional(),
    addresseeId: z.boolean().optional(),
    requester: z.boolean().optional(),
    addressee: z.boolean().optional(),
  })
  .strict();

export const FriendshipFindFirstSchema: z.ZodType<Prisma.FriendshipFindFirstArgs> =
  z
    .object({
      select: FriendshipFindFirstSelectSchema.optional(),
      orderBy: z
        .union([
          FriendshipOrderByWithRelationInputObjectSchema,
          FriendshipOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: FriendshipWhereInputObjectSchema.optional(),
      cursor: FriendshipWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          FriendshipScalarFieldEnumSchema,
          FriendshipScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.FriendshipFindFirstArgs>;

export const FriendshipFindFirstZodSchema = z
  .object({
    select: FriendshipFindFirstSelectSchema.optional(),
    orderBy: z
      .union([
        FriendshipOrderByWithRelationInputObjectSchema,
        FriendshipOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: FriendshipWhereInputObjectSchema.optional(),
    cursor: FriendshipWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([
        FriendshipScalarFieldEnumSchema,
        FriendshipScalarFieldEnumSchema.array(),
      ])
      .optional(),
  })
  .strict();
