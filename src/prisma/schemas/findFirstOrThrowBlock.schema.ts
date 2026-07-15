import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BlockIncludeObjectSchema as BlockIncludeObjectSchema } from './objects/BlockInclude.schema';
import { BlockOrderByWithRelationInputObjectSchema as BlockOrderByWithRelationInputObjectSchema } from './objects/BlockOrderByWithRelationInput.schema';
import { BlockWhereInputObjectSchema as BlockWhereInputObjectSchema } from './objects/BlockWhereInput.schema';
import { BlockWhereUniqueInputObjectSchema as BlockWhereUniqueInputObjectSchema } from './objects/BlockWhereUniqueInput.schema';
import { BlockScalarFieldEnumSchema } from './enums/BlockScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BlockFindFirstOrThrowSelectSchema: z.ZodType<Prisma.BlockSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    blockerId: z.boolean().optional(),
    blockedId: z.boolean().optional(),
    blocker: z.boolean().optional(),
    blocked: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.BlockSelect>;

export const BlockFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    blockerId: z.boolean().optional(),
    blockedId: z.boolean().optional(),
    blocker: z.boolean().optional(),
    blocked: z.boolean().optional()
  }).strict();

export const BlockFindFirstOrThrowSchema: z.ZodType<Prisma.BlockFindFirstOrThrowArgs> = z.object({ select: BlockFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => BlockIncludeObjectSchema.optional()), orderBy: z.union([BlockOrderByWithRelationInputObjectSchema, BlockOrderByWithRelationInputObjectSchema.array()]).optional(), where: BlockWhereInputObjectSchema.optional(), cursor: BlockWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BlockScalarFieldEnumSchema, BlockScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.BlockFindFirstOrThrowArgs>;

export const BlockFindFirstOrThrowZodSchema = z.object({ select: BlockFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => BlockIncludeObjectSchema.optional()), orderBy: z.union([BlockOrderByWithRelationInputObjectSchema, BlockOrderByWithRelationInputObjectSchema.array()]).optional(), where: BlockWhereInputObjectSchema.optional(), cursor: BlockWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BlockScalarFieldEnumSchema, BlockScalarFieldEnumSchema.array()]).optional() }).strict();