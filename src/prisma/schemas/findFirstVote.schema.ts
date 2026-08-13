import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { VoteIncludeObjectSchema as VoteIncludeObjectSchema } from './objects/VoteInclude.schema';
import { VoteOrderByWithRelationInputObjectSchema as VoteOrderByWithRelationInputObjectSchema } from './objects/VoteOrderByWithRelationInput.schema';
import { VoteWhereInputObjectSchema as VoteWhereInputObjectSchema } from './objects/VoteWhereInput.schema';
import { VoteWhereUniqueInputObjectSchema as VoteWhereUniqueInputObjectSchema } from './objects/VoteWhereUniqueInput.schema';
import { VoteScalarFieldEnumSchema } from './enums/VoteScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VoteFindFirstSelectSchema: z.ZodType<Prisma.VoteSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    label: z.boolean().optional(),
    createdById: z.boolean().optional(),
    pollId: z.boolean().optional(),
    poll: z.boolean().optional(),
    voteOptions: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.VoteSelect>;

export const VoteFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    label: z.boolean().optional(),
    createdById: z.boolean().optional(),
    pollId: z.boolean().optional(),
    poll: z.boolean().optional(),
    voteOptions: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const VoteFindFirstSchema: z.ZodType<Prisma.VoteFindFirstArgs> = z.object({ select: VoteFindFirstSelectSchema.optional(), include: z.lazy(() => VoteIncludeObjectSchema.optional()), orderBy: z.union([VoteOrderByWithRelationInputObjectSchema, VoteOrderByWithRelationInputObjectSchema.array()]).optional(), where: VoteWhereInputObjectSchema.optional(), cursor: VoteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VoteScalarFieldEnumSchema, VoteScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.VoteFindFirstArgs>;

export const VoteFindFirstZodSchema = z.object({ select: VoteFindFirstSelectSchema.optional(), include: z.lazy(() => VoteIncludeObjectSchema.optional()), orderBy: z.union([VoteOrderByWithRelationInputObjectSchema, VoteOrderByWithRelationInputObjectSchema.array()]).optional(), where: VoteWhereInputObjectSchema.optional(), cursor: VoteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VoteScalarFieldEnumSchema, VoteScalarFieldEnumSchema.array()]).optional() }).strict();