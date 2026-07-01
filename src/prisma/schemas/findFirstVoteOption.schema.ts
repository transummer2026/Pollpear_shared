import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { VoteOptionOrderByWithRelationInputObjectSchema as VoteOptionOrderByWithRelationInputObjectSchema } from './objects/VoteOptionOrderByWithRelationInput.schema';
import { VoteOptionWhereInputObjectSchema as VoteOptionWhereInputObjectSchema } from './objects/VoteOptionWhereInput.schema';
import { VoteOptionWhereUniqueInputObjectSchema as VoteOptionWhereUniqueInputObjectSchema } from './objects/VoteOptionWhereUniqueInput.schema';
import { VoteOptionScalarFieldEnumSchema } from './enums/VoteOptionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VoteOptionFindFirstSelectSchema: z.ZodType<Prisma.VoteOptionSelect> = z.object({
    voteId: z.boolean().optional(),
    optionId: z.boolean().optional(),
    vote: z.boolean().optional(),
    option: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.VoteOptionSelect>;

export const VoteOptionFindFirstSelectZodSchema = z.object({
    voteId: z.boolean().optional(),
    optionId: z.boolean().optional(),
    vote: z.boolean().optional(),
    option: z.boolean().optional()
  }).strict();

export const VoteOptionFindFirstSchema: z.ZodType<Prisma.VoteOptionFindFirstArgs> = z.object({ select: VoteOptionFindFirstSelectSchema.optional(),  orderBy: z.union([VoteOptionOrderByWithRelationInputObjectSchema, VoteOptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: VoteOptionWhereInputObjectSchema.optional(), cursor: VoteOptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VoteOptionScalarFieldEnumSchema, VoteOptionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.VoteOptionFindFirstArgs>;

export const VoteOptionFindFirstZodSchema = z.object({ select: VoteOptionFindFirstSelectSchema.optional(),  orderBy: z.union([VoteOptionOrderByWithRelationInputObjectSchema, VoteOptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: VoteOptionWhereInputObjectSchema.optional(), cursor: VoteOptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VoteOptionScalarFieldEnumSchema, VoteOptionScalarFieldEnumSchema.array()]).optional() }).strict();