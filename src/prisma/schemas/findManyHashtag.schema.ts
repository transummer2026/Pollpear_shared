import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { HashtagIncludeObjectSchema as HashtagIncludeObjectSchema } from './objects/HashtagInclude.schema';
import { HashtagOrderByWithRelationInputObjectSchema as HashtagOrderByWithRelationInputObjectSchema } from './objects/HashtagOrderByWithRelationInput.schema';
import { HashtagWhereInputObjectSchema as HashtagWhereInputObjectSchema } from './objects/HashtagWhereInput.schema';
import { HashtagWhereUniqueInputObjectSchema as HashtagWhereUniqueInputObjectSchema } from './objects/HashtagWhereUniqueInput.schema';
import { HashtagScalarFieldEnumSchema } from './enums/HashtagScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const HashtagFindManySelectSchema: z.ZodType<Prisma.HashtagSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    isVisible: z.boolean().optional(),
    pollHashtags: z.boolean().optional(),
    reports: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.HashtagSelect>;

export const HashtagFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    isVisible: z.boolean().optional(),
    pollHashtags: z.boolean().optional(),
    reports: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const HashtagFindManySchema: z.ZodType<Prisma.HashtagFindManyArgs> = z.object({ select: HashtagFindManySelectSchema.optional(), include: z.lazy(() => HashtagIncludeObjectSchema.optional()), orderBy: z.union([HashtagOrderByWithRelationInputObjectSchema, HashtagOrderByWithRelationInputObjectSchema.array()]).optional(), where: HashtagWhereInputObjectSchema.optional(), cursor: HashtagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([HashtagScalarFieldEnumSchema, HashtagScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.HashtagFindManyArgs>;

export const HashtagFindManyZodSchema = z.object({ select: HashtagFindManySelectSchema.optional(), include: z.lazy(() => HashtagIncludeObjectSchema.optional()), orderBy: z.union([HashtagOrderByWithRelationInputObjectSchema, HashtagOrderByWithRelationInputObjectSchema.array()]).optional(), where: HashtagWhereInputObjectSchema.optional(), cursor: HashtagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([HashtagScalarFieldEnumSchema, HashtagScalarFieldEnumSchema.array()]).optional() }).strict();