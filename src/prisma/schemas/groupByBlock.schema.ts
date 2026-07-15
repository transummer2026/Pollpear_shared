import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BlockWhereInputObjectSchema as BlockWhereInputObjectSchema } from './objects/BlockWhereInput.schema';
import { BlockOrderByWithAggregationInputObjectSchema as BlockOrderByWithAggregationInputObjectSchema } from './objects/BlockOrderByWithAggregationInput.schema';
import { BlockScalarWhereWithAggregatesInputObjectSchema as BlockScalarWhereWithAggregatesInputObjectSchema } from './objects/BlockScalarWhereWithAggregatesInput.schema';
import { BlockScalarFieldEnumSchema } from './enums/BlockScalarFieldEnum.schema';
import { BlockCountAggregateInputObjectSchema as BlockCountAggregateInputObjectSchema } from './objects/BlockCountAggregateInput.schema';
import { BlockMinAggregateInputObjectSchema as BlockMinAggregateInputObjectSchema } from './objects/BlockMinAggregateInput.schema';
import { BlockMaxAggregateInputObjectSchema as BlockMaxAggregateInputObjectSchema } from './objects/BlockMaxAggregateInput.schema';
import { BlockAvgAggregateInputObjectSchema as BlockAvgAggregateInputObjectSchema } from './objects/BlockAvgAggregateInput.schema';
import { BlockSumAggregateInputObjectSchema as BlockSumAggregateInputObjectSchema } from './objects/BlockSumAggregateInput.schema';

export const BlockGroupBySchema: z.ZodType<Prisma.BlockGroupByArgs> = z.object({ where: BlockWhereInputObjectSchema.optional(), orderBy: z.union([BlockOrderByWithAggregationInputObjectSchema, BlockOrderByWithAggregationInputObjectSchema.array()]).optional(), having: BlockScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(BlockScalarFieldEnumSchema), _count: z.union([ z.literal(true), BlockCountAggregateInputObjectSchema ]).optional(), _min: BlockMinAggregateInputObjectSchema.optional(), _max: BlockMaxAggregateInputObjectSchema.optional(), _avg: BlockAvgAggregateInputObjectSchema.optional(), _sum: BlockSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BlockGroupByArgs>;

export const BlockGroupByZodSchema = z.object({ where: BlockWhereInputObjectSchema.optional(), orderBy: z.union([BlockOrderByWithAggregationInputObjectSchema, BlockOrderByWithAggregationInputObjectSchema.array()]).optional(), having: BlockScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(BlockScalarFieldEnumSchema), _count: z.union([ z.literal(true), BlockCountAggregateInputObjectSchema ]).optional(), _min: BlockMinAggregateInputObjectSchema.optional(), _max: BlockMaxAggregateInputObjectSchema.optional(), _avg: BlockAvgAggregateInputObjectSchema.optional(), _sum: BlockSumAggregateInputObjectSchema.optional() }).strict();