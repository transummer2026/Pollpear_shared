import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollOrderByWithRelationInputObjectSchema as PollOrderByWithRelationInputObjectSchema } from './objects/PollOrderByWithRelationInput.schema';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './objects/PollWhereInput.schema';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './objects/PollWhereUniqueInput.schema';
import { PollScalarFieldEnumSchema } from './enums/PollScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PollFindManySelectSchema: z.ZodType<Prisma.PollSelect> = z.object({
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

export const PollFindManySelectZodSchema = z.object({
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

export const PollFindManySchema: z.ZodType<Prisma.PollFindManyArgs> = z.object({ select: PollFindManySelectSchema.optional(),  orderBy: z.union([PollOrderByWithRelationInputObjectSchema, PollOrderByWithRelationInputObjectSchema.array()]).optional(), where: PollWhereInputObjectSchema.optional(), cursor: PollWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PollScalarFieldEnumSchema, PollScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PollFindManyArgs>;

export const PollFindManyZodSchema = z.object({ select: PollFindManySelectSchema.optional(),  orderBy: z.union([PollOrderByWithRelationInputObjectSchema, PollOrderByWithRelationInputObjectSchema.array()]).optional(), where: PollWhereInputObjectSchema.optional(), cursor: PollWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PollScalarFieldEnumSchema, PollScalarFieldEnumSchema.array()]).optional() }).strict();