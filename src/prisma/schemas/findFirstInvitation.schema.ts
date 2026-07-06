import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { InvitationOrderByWithRelationInputObjectSchema as InvitationOrderByWithRelationInputObjectSchema } from "./objects/InvitationOrderByWithRelationInput.schema";
import { InvitationWhereInputObjectSchema as InvitationWhereInputObjectSchema } from "./objects/InvitationWhereInput.schema";
import { InvitationWhereUniqueInputObjectSchema as InvitationWhereUniqueInputObjectSchema } from "./objects/InvitationWhereUniqueInput.schema";
import { InvitationScalarFieldEnumSchema } from "./enums/InvitationScalarFieldEnum.schema";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const InvitationFindFirstSelectSchema: z.ZodType<Prisma.InvitationSelect> =
  z
    .object({
      id: z.boolean().optional(),
      status: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
      label: z.boolean().optional(),
      roomId: z.boolean().optional(),
      inviterId: z.boolean().optional(),
      inviteeId: z.boolean().optional(),
      room: z.boolean().optional(),
      inviter: z.boolean().optional(),
      invitee: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.InvitationSelect>;

export const InvitationFindFirstSelectZodSchema = z
  .object({
    id: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    label: z.boolean().optional(),
    roomId: z.boolean().optional(),
    inviterId: z.boolean().optional(),
    inviteeId: z.boolean().optional(),
    room: z.boolean().optional(),
    inviter: z.boolean().optional(),
    invitee: z.boolean().optional(),
  })
  .strict();

export const InvitationFindFirstSchema: z.ZodType<Prisma.InvitationFindFirstArgs> =
  z
    .object({
      select: InvitationFindFirstSelectSchema.optional(),
      orderBy: z
        .union([
          InvitationOrderByWithRelationInputObjectSchema,
          InvitationOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: InvitationWhereInputObjectSchema.optional(),
      cursor: InvitationWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          InvitationScalarFieldEnumSchema,
          InvitationScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.InvitationFindFirstArgs>;

export const InvitationFindFirstZodSchema = z
  .object({
    select: InvitationFindFirstSelectSchema.optional(),
    orderBy: z
      .union([
        InvitationOrderByWithRelationInputObjectSchema,
        InvitationOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: InvitationWhereInputObjectSchema.optional(),
    cursor: InvitationWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([
        InvitationScalarFieldEnumSchema,
        InvitationScalarFieldEnumSchema.array(),
      ])
      .optional(),
  })
  .strict();
