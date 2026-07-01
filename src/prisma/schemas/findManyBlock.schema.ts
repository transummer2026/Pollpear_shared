import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BlockOrderByWithRelationInputObjectSchema as BlockOrderByWithRelationInputObjectSchema } from './objects/BlockOrderByWithRelationInput.schema';
import { BlockWhereInputObjectSchema as BlockWhereInputObjectSchema } from './objects/BlockWhereInput.schema';
import { BlockWhereUniqueInputObjectSchema as BlockWhereUniqueInputObjectSchema } from './objects/BlockWhereUniqueInput.schema';
import { BlockScalarFieldEnumSchema } from './enums/BlockScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BlockFindManySelectSchema: z.ZodType<Prisma.BlockSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    blockerId: z.boolean().optional(),
    blockedId: z.boolean().optional(),
    blocker: z.boolean().optional(),
    blocked: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.BlockSelect>;

export const BlockFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    blockerId: z.boolean().optional(),
    blockedId: z.boolean().optional(),
    blocker: z.boolean().optional(),
    blocked: z.boolean().optional()
  }).strict();

export const BlockFindManySchema: z.ZodType<Prisma.BlockFindManyArgs> = z.object({ select: BlockFindManySelectSchema.optional(),  orderBy: z.union([BlockOrderByWithRelationInputObjectSchema, BlockOrderByWithRelationInputObjectSchema.array()]).optional(), where: BlockWhereInputObjectSchema.optional(), cursor: BlockWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BlockScalarFieldEnumSchema, BlockScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.BlockFindManyArgs>;

export const BlockFindManyZodSchema = z.object({ select: BlockFindManySelectSchema.optional(),  orderBy: z.union([BlockOrderByWithRelationInputObjectSchema, BlockOrderByWithRelationInputObjectSchema.array()]).optional(), where: BlockWhereInputObjectSchema.optional(), cursor: BlockWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BlockScalarFieldEnumSchema, BlockScalarFieldEnumSchema.array()]).optional() }).strict();