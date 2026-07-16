import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollIncludeObjectSchema as PollIncludeObjectSchema } from './objects/PollInclude.schema';
import { PollOrderByWithRelationInputObjectSchema as PollOrderByWithRelationInputObjectSchema } from './objects/PollOrderByWithRelationInput.schema';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './objects/PollWhereInput.schema';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './objects/PollWhereUniqueInput.schema';
import { PollScalarFieldEnumSchema } from './enums/PollScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PollFindFirstOrThrowSelectSchema: z.ZodType<Prisma.PollSelect> = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    type: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    publishedAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    endsAt: z.boolean().optional(),
    visibility: z.boolean().optional(),
    allowChangeVote: z.boolean().optional(),
    isAnonymous: z.boolean().optional(),
    status: z.boolean().optional(),
    createdById: z.boolean().optional(),
    roomId: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    room: z.boolean().optional(),
    options: z.boolean().optional(),
    pollHashtags: z.boolean().optional(),
    pollTemplates: z.boolean().optional(),
    reports: z.boolean().optional(),
    childDependencies: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PollSelect>;

export const PollFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    type: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    publishedAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    endsAt: z.boolean().optional(),
    visibility: z.boolean().optional(),
    allowChangeVote: z.boolean().optional(),
    isAnonymous: z.boolean().optional(),
    status: z.boolean().optional(),
    createdById: z.boolean().optional(),
    roomId: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    room: z.boolean().optional(),
    options: z.boolean().optional(),
    pollHashtags: z.boolean().optional(),
    pollTemplates: z.boolean().optional(),
    reports: z.boolean().optional(),
    childDependencies: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const PollFindFirstOrThrowSchema: z.ZodType<Prisma.PollFindFirstOrThrowArgs> = z.object({ select: PollFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => PollIncludeObjectSchema.optional()), orderBy: z.union([PollOrderByWithRelationInputObjectSchema, PollOrderByWithRelationInputObjectSchema.array()]).optional(), where: PollWhereInputObjectSchema.optional(), cursor: PollWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PollScalarFieldEnumSchema, PollScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PollFindFirstOrThrowArgs>;

export const PollFindFirstOrThrowZodSchema = z.object({ select: PollFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => PollIncludeObjectSchema.optional()), orderBy: z.union([PollOrderByWithRelationInputObjectSchema, PollOrderByWithRelationInputObjectSchema.array()]).optional(), where: PollWhereInputObjectSchema.optional(), cursor: PollWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PollScalarFieldEnumSchema, PollScalarFieldEnumSchema.array()]).optional() }).strict();