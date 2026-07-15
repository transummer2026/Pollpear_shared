import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BlockOrderByWithRelationInputObjectSchema as BlockOrderByWithRelationInputObjectSchema } from './objects/BlockOrderByWithRelationInput.schema';
import { BlockWhereInputObjectSchema as BlockWhereInputObjectSchema } from './objects/BlockWhereInput.schema';
import { BlockWhereUniqueInputObjectSchema as BlockWhereUniqueInputObjectSchema } from './objects/BlockWhereUniqueInput.schema';
import { BlockCountAggregateInputObjectSchema as BlockCountAggregateInputObjectSchema } from './objects/BlockCountAggregateInput.schema';
import { BlockMinAggregateInputObjectSchema as BlockMinAggregateInputObjectSchema } from './objects/BlockMinAggregateInput.schema';
import { BlockMaxAggregateInputObjectSchema as BlockMaxAggregateInputObjectSchema } from './objects/BlockMaxAggregateInput.schema';
import { BlockAvgAggregateInputObjectSchema as BlockAvgAggregateInputObjectSchema } from './objects/BlockAvgAggregateInput.schema';
import { BlockSumAggregateInputObjectSchema as BlockSumAggregateInputObjectSchema } from './objects/BlockSumAggregateInput.schema';

export const BlockAggregateSchema: z.ZodType<Prisma.BlockAggregateArgs> = z.object({ orderBy: z.union([BlockOrderByWithRelationInputObjectSchema, BlockOrderByWithRelationInputObjectSchema.array()]).optional(), where: BlockWhereInputObjectSchema.optional(), cursor: BlockWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), BlockCountAggregateInputObjectSchema ]).optional(), _min: BlockMinAggregateInputObjectSchema.optional(), _max: BlockMaxAggregateInputObjectSchema.optional(), _avg: BlockAvgAggregateInputObjectSchema.optional(), _sum: BlockSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BlockAggregateArgs>;

export const BlockAggregateZodSchema = z.object({ orderBy: z.union([BlockOrderByWithRelationInputObjectSchema, BlockOrderByWithRelationInputObjectSchema.array()]).optional(), where: BlockWhereInputObjectSchema.optional(), cursor: BlockWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), BlockCountAggregateInputObjectSchema ]).optional(), _min: BlockMinAggregateInputObjectSchema.optional(), _max: BlockMaxAggregateInputObjectSchema.optional(), _avg: BlockAvgAggregateInputObjectSchema.optional(), _sum: BlockSumAggregateInputObjectSchema.optional() }).strict();