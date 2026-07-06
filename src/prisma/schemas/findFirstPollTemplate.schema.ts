import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { PollTemplateOrderByWithRelationInputObjectSchema as PollTemplateOrderByWithRelationInputObjectSchema } from "./objects/PollTemplateOrderByWithRelationInput.schema";
import { PollTemplateWhereInputObjectSchema as PollTemplateWhereInputObjectSchema } from "./objects/PollTemplateWhereInput.schema";
import { PollTemplateWhereUniqueInputObjectSchema as PollTemplateWhereUniqueInputObjectSchema } from "./objects/PollTemplateWhereUniqueInput.schema";
import { PollTemplateScalarFieldEnumSchema } from "./enums/PollTemplateScalarFieldEnum.schema";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PollTemplateFindFirstSelectSchema: z.ZodType<Prisma.PollTemplateSelect> =
  z
    .object({
      userId: z.boolean().optional(),
      pollId: z.boolean().optional(),
      user: z.boolean().optional(),
      poll: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.PollTemplateSelect>;

export const PollTemplateFindFirstSelectZodSchema = z
  .object({
    userId: z.boolean().optional(),
    pollId: z.boolean().optional(),
    user: z.boolean().optional(),
    poll: z.boolean().optional(),
  })
  .strict();

export const PollTemplateFindFirstSchema: z.ZodType<Prisma.PollTemplateFindFirstArgs> =
  z
    .object({
      select: PollTemplateFindFirstSelectSchema.optional(),
      orderBy: z
        .union([
          PollTemplateOrderByWithRelationInputObjectSchema,
          PollTemplateOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: PollTemplateWhereInputObjectSchema.optional(),
      cursor: PollTemplateWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          PollTemplateScalarFieldEnumSchema,
          PollTemplateScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.PollTemplateFindFirstArgs>;

export const PollTemplateFindFirstZodSchema = z
  .object({
    select: PollTemplateFindFirstSelectSchema.optional(),
    orderBy: z
      .union([
        PollTemplateOrderByWithRelationInputObjectSchema,
        PollTemplateOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: PollTemplateWhereInputObjectSchema.optional(),
    cursor: PollTemplateWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([
        PollTemplateScalarFieldEnumSchema,
        PollTemplateScalarFieldEnumSchema.array(),
      ])
      .optional(),
  })
  .strict();
