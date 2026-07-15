import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { VoteOptionIncludeObjectSchema as VoteOptionIncludeObjectSchema } from './objects/VoteOptionInclude.schema';
import { VoteOptionOrderByWithRelationInputObjectSchema as VoteOptionOrderByWithRelationInputObjectSchema } from './objects/VoteOptionOrderByWithRelationInput.schema';
import { VoteOptionWhereInputObjectSchema as VoteOptionWhereInputObjectSchema } from './objects/VoteOptionWhereInput.schema';
import { VoteOptionWhereUniqueInputObjectSchema as VoteOptionWhereUniqueInputObjectSchema } from './objects/VoteOptionWhereUniqueInput.schema';
import { VoteOptionScalarFieldEnumSchema } from './enums/VoteOptionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VoteOptionFindFirstOrThrowSelectSchema: z.ZodType<Prisma.VoteOptionSelect> = z.object({
    voteId: z.boolean().optional(),
    optionId: z.boolean().optional(),
    vote: z.boolean().optional(),
    option: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.VoteOptionSelect>;

export const VoteOptionFindFirstOrThrowSelectZodSchema = z.object({
    voteId: z.boolean().optional(),
    optionId: z.boolean().optional(),
    vote: z.boolean().optional(),
    option: z.boolean().optional()
  }).strict();

export const VoteOptionFindFirstOrThrowSchema: z.ZodType<Prisma.VoteOptionFindFirstOrThrowArgs> = z.object({ select: VoteOptionFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => VoteOptionIncludeObjectSchema.optional()), orderBy: z.union([VoteOptionOrderByWithRelationInputObjectSchema, VoteOptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: VoteOptionWhereInputObjectSchema.optional(), cursor: VoteOptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VoteOptionScalarFieldEnumSchema, VoteOptionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.VoteOptionFindFirstOrThrowArgs>;

export const VoteOptionFindFirstOrThrowZodSchema = z.object({ select: VoteOptionFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => VoteOptionIncludeObjectSchema.optional()), orderBy: z.union([VoteOptionOrderByWithRelationInputObjectSchema, VoteOptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: VoteOptionWhereInputObjectSchema.optional(), cursor: VoteOptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VoteOptionScalarFieldEnumSchema, VoteOptionScalarFieldEnumSchema.array()]).optional() }).strict();