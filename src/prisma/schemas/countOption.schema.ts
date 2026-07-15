import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { OptionOrderByWithRelationInputObjectSchema as OptionOrderByWithRelationInputObjectSchema } from './objects/OptionOrderByWithRelationInput.schema';
import { OptionWhereInputObjectSchema as OptionWhereInputObjectSchema } from './objects/OptionWhereInput.schema';
import { OptionWhereUniqueInputObjectSchema as OptionWhereUniqueInputObjectSchema } from './objects/OptionWhereUniqueInput.schema';
import { OptionCountAggregateInputObjectSchema as OptionCountAggregateInputObjectSchema } from './objects/OptionCountAggregateInput.schema';

export const OptionCountSchema: z.ZodType<Prisma.OptionCountArgs> = z.object({ orderBy: z.union([OptionOrderByWithRelationInputObjectSchema, OptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: OptionWhereInputObjectSchema.optional(), cursor: OptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), OptionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.OptionCountArgs>;

export const OptionCountZodSchema = z.object({ orderBy: z.union([OptionOrderByWithRelationInputObjectSchema, OptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: OptionWhereInputObjectSchema.optional(), cursor: OptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), OptionCountAggregateInputObjectSchema ]).optional() }).strict();