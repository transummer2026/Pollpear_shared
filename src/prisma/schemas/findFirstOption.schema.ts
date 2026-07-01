import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { OptionOrderByWithRelationInputObjectSchema as OptionOrderByWithRelationInputObjectSchema } from './objects/OptionOrderByWithRelationInput.schema';
import { OptionWhereInputObjectSchema as OptionWhereInputObjectSchema } from './objects/OptionWhereInput.schema';
import { OptionWhereUniqueInputObjectSchema as OptionWhereUniqueInputObjectSchema } from './objects/OptionWhereUniqueInput.schema';
import { OptionScalarFieldEnumSchema } from './enums/OptionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OptionFindFirstSelectSchema: z.ZodType<Prisma.OptionSelect> = z.object({
    id: z.boolean().optional(),
    label: z.boolean().optional(),
    sliderLeftLabel: z.boolean().optional(),
    sliderRightLabel: z.boolean().optional(),
    order: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    pollId: z.boolean().optional(),
    poll: z.boolean().optional(),
    voteOptions: z.boolean().optional(),
    pollDependencies: z.boolean().optional(),
    reports: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.OptionSelect>;

export const OptionFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    label: z.boolean().optional(),
    sliderLeftLabel: z.boolean().optional(),
    sliderRightLabel: z.boolean().optional(),
    order: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    pollId: z.boolean().optional(),
    poll: z.boolean().optional(),
    voteOptions: z.boolean().optional(),
    pollDependencies: z.boolean().optional(),
    reports: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const OptionFindFirstSchema: z.ZodType<Prisma.OptionFindFirstArgs> = z.object({ select: OptionFindFirstSelectSchema.optional(),  orderBy: z.union([OptionOrderByWithRelationInputObjectSchema, OptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: OptionWhereInputObjectSchema.optional(), cursor: OptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OptionScalarFieldEnumSchema, OptionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.OptionFindFirstArgs>;

export const OptionFindFirstZodSchema = z.object({ select: OptionFindFirstSelectSchema.optional(),  orderBy: z.union([OptionOrderByWithRelationInputObjectSchema, OptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: OptionWhereInputObjectSchema.optional(), cursor: OptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OptionScalarFieldEnumSchema, OptionScalarFieldEnumSchema.array()]).optional() }).strict();