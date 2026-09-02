import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { HashtagIncludeObjectSchema as HashtagIncludeObjectSchema } from './objects/HashtagInclude.schema';
import { HashtagOrderByWithRelationInputObjectSchema as HashtagOrderByWithRelationInputObjectSchema } from './objects/HashtagOrderByWithRelationInput.schema';
import { HashtagWhereInputObjectSchema as HashtagWhereInputObjectSchema } from './objects/HashtagWhereInput.schema';
import { HashtagWhereUniqueInputObjectSchema as HashtagWhereUniqueInputObjectSchema } from './objects/HashtagWhereUniqueInput.schema';
import { HashtagScalarFieldEnumSchema } from './enums/HashtagScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const HashtagFindFirstOrThrowSelectSchema: z.ZodType<Prisma.HashtagSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    pollHashtags: z.boolean().optional(),
    reports: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.HashtagSelect>;

export const HashtagFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    pollHashtags: z.boolean().optional(),
    reports: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const HashtagFindFirstOrThrowSchema: z.ZodType<Prisma.HashtagFindFirstOrThrowArgs> = z.object({ select: HashtagFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => HashtagIncludeObjectSchema.optional()), orderBy: z.union([HashtagOrderByWithRelationInputObjectSchema, HashtagOrderByWithRelationInputObjectSchema.array()]).optional(), where: HashtagWhereInputObjectSchema.optional(), cursor: HashtagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([HashtagScalarFieldEnumSchema, HashtagScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.HashtagFindFirstOrThrowArgs>;

export const HashtagFindFirstOrThrowZodSchema = z.object({ select: HashtagFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => HashtagIncludeObjectSchema.optional()), orderBy: z.union([HashtagOrderByWithRelationInputObjectSchema, HashtagOrderByWithRelationInputObjectSchema.array()]).optional(), where: HashtagWhereInputObjectSchema.optional(), cursor: HashtagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([HashtagScalarFieldEnumSchema, HashtagScalarFieldEnumSchema.array()]).optional() }).strict();