import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BlockOrderByWithRelationInputObjectSchema as BlockOrderByWithRelationInputObjectSchema } from './objects/BlockOrderByWithRelationInput.schema';
import { BlockWhereInputObjectSchema as BlockWhereInputObjectSchema } from './objects/BlockWhereInput.schema';
import { BlockWhereUniqueInputObjectSchema as BlockWhereUniqueInputObjectSchema } from './objects/BlockWhereUniqueInput.schema';
import { BlockCountAggregateInputObjectSchema as BlockCountAggregateInputObjectSchema } from './objects/BlockCountAggregateInput.schema';

export const BlockCountSchema: z.ZodType<Prisma.BlockCountArgs> = z.object({ orderBy: z.union([BlockOrderByWithRelationInputObjectSchema, BlockOrderByWithRelationInputObjectSchema.array()]).optional(), where: BlockWhereInputObjectSchema.optional(), cursor: BlockWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BlockCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.BlockCountArgs>;

export const BlockCountZodSchema = z.object({ orderBy: z.union([BlockOrderByWithRelationInputObjectSchema, BlockOrderByWithRelationInputObjectSchema.array()]).optional(), where: BlockWhereInputObjectSchema.optional(), cursor: BlockWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BlockCountAggregateInputObjectSchema ]).optional() }).strict();