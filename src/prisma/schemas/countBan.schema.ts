import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BanOrderByWithRelationInputObjectSchema as BanOrderByWithRelationInputObjectSchema } from './objects/BanOrderByWithRelationInput.schema';
import { BanWhereInputObjectSchema as BanWhereInputObjectSchema } from './objects/BanWhereInput.schema';
import { BanWhereUniqueInputObjectSchema as BanWhereUniqueInputObjectSchema } from './objects/BanWhereUniqueInput.schema';
import { BanCountAggregateInputObjectSchema as BanCountAggregateInputObjectSchema } from './objects/BanCountAggregateInput.schema';

export const BanCountSchema: z.ZodType<Prisma.BanCountArgs> = z.object({ orderBy: z.union([BanOrderByWithRelationInputObjectSchema, BanOrderByWithRelationInputObjectSchema.array()]).optional(), where: BanWhereInputObjectSchema.optional(), cursor: BanWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BanCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.BanCountArgs>;

export const BanCountZodSchema = z.object({ orderBy: z.union([BanOrderByWithRelationInputObjectSchema, BanOrderByWithRelationInputObjectSchema.array()]).optional(), where: BanWhereInputObjectSchema.optional(), cursor: BanWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BanCountAggregateInputObjectSchema ]).optional() }).strict();