import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { BanAttachmentOrderByWithRelationInputObjectSchema as BanAttachmentOrderByWithRelationInputObjectSchema } from "./objects/BanAttachmentOrderByWithRelationInput.schema";
import { BanAttachmentWhereInputObjectSchema as BanAttachmentWhereInputObjectSchema } from "./objects/BanAttachmentWhereInput.schema";
import { BanAttachmentWhereUniqueInputObjectSchema as BanAttachmentWhereUniqueInputObjectSchema } from "./objects/BanAttachmentWhereUniqueInput.schema";
import { BanAttachmentScalarFieldEnumSchema } from "./enums/BanAttachmentScalarFieldEnum.schema";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BanAttachmentFindManySelectSchema: z.ZodType<Prisma.BanAttachmentSelect> =
  z
    .object({
      id: z.boolean().optional(),
      attachmentUrl: z.boolean().optional(),
      banId: z.boolean().optional(),
      ban: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.BanAttachmentSelect>;

export const BanAttachmentFindManySelectZodSchema = z
  .object({
    id: z.boolean().optional(),
    attachmentUrl: z.boolean().optional(),
    banId: z.boolean().optional(),
    ban: z.boolean().optional(),
  })
  .strict();

export const BanAttachmentFindManySchema: z.ZodType<Prisma.BanAttachmentFindManyArgs> =
  z
    .object({
      select: BanAttachmentFindManySelectSchema.optional(),
      orderBy: z
        .union([
          BanAttachmentOrderByWithRelationInputObjectSchema,
          BanAttachmentOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: BanAttachmentWhereInputObjectSchema.optional(),
      cursor: BanAttachmentWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          BanAttachmentScalarFieldEnumSchema,
          BanAttachmentScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.BanAttachmentFindManyArgs>;

export const BanAttachmentFindManyZodSchema = z
  .object({
    select: BanAttachmentFindManySelectSchema.optional(),
    orderBy: z
      .union([
        BanAttachmentOrderByWithRelationInputObjectSchema,
        BanAttachmentOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: BanAttachmentWhereInputObjectSchema.optional(),
    cursor: BanAttachmentWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([
        BanAttachmentScalarFieldEnumSchema,
        BanAttachmentScalarFieldEnumSchema.array(),
      ])
      .optional(),
  })
  .strict();
