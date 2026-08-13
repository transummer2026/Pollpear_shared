import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { VoteIncludeObjectSchema as VoteIncludeObjectSchema } from './objects/VoteInclude.schema';
import { VoteOrderByWithRelationInputObjectSchema as VoteOrderByWithRelationInputObjectSchema } from './objects/VoteOrderByWithRelationInput.schema';
import { VoteWhereInputObjectSchema as VoteWhereInputObjectSchema } from './objects/VoteWhereInput.schema';
import { VoteWhereUniqueInputObjectSchema as VoteWhereUniqueInputObjectSchema } from './objects/VoteWhereUniqueInput.schema';
import { VoteScalarFieldEnumSchema } from './enums/VoteScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VoteFindFirstOrThrowSelectSchema: z.ZodType<Prisma.VoteSelect> = z.object({
    id: z.boolean().optional(),
    freeField: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    createdById: z.boolean().optional(),
    pollId: z.boolean().optional(),
    poll: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    voteOptions: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.VoteSelect>;

export const VoteFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    freeField: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    createdById: z.boolean().optional(),
    pollId: z.boolean().optional(),
    poll: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    voteOptions: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const VoteFindFirstOrThrowSchema: z.ZodType<Prisma.VoteFindFirstOrThrowArgs> = z.object({ select: VoteFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => VoteIncludeObjectSchema.optional()), orderBy: z.union([VoteOrderByWithRelationInputObjectSchema, VoteOrderByWithRelationInputObjectSchema.array()]).optional(), where: VoteWhereInputObjectSchema.optional(), cursor: VoteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VoteScalarFieldEnumSchema, VoteScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.VoteFindFirstOrThrowArgs>;

export const VoteFindFirstOrThrowZodSchema = z.object({ select: VoteFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => VoteIncludeObjectSchema.optional()), orderBy: z.union([VoteOrderByWithRelationInputObjectSchema, VoteOrderByWithRelationInputObjectSchema.array()]).optional(), where: VoteWhereInputObjectSchema.optional(), cursor: VoteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VoteScalarFieldEnumSchema, VoteScalarFieldEnumSchema.array()]).optional() }).strict();