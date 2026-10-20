import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollDependencyOrderByWithRelationInputObjectSchema as PollDependencyOrderByWithRelationInputObjectSchema } from './objects/PollDependencyOrderByWithRelationInput.schema';
import { PollDependencyWhereInputObjectSchema as PollDependencyWhereInputObjectSchema } from './objects/PollDependencyWhereInput.schema';
import { PollDependencyWhereUniqueInputObjectSchema as PollDependencyWhereUniqueInputObjectSchema } from './objects/PollDependencyWhereUniqueInput.schema';
import { PollDependencyCountAggregateInputObjectSchema as PollDependencyCountAggregateInputObjectSchema } from './objects/PollDependencyCountAggregateInput.schema';

export const PollDependencyCountSchema: z.ZodType<Prisma.PollDependencyCountArgs> = z.object({ orderBy: z.union([PollDependencyOrderByWithRelationInputObjectSchema, PollDependencyOrderByWithRelationInputObjectSchema.array()]).optional(), where: PollDependencyWhereInputObjectSchema.optional(), cursor: PollDependencyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PollDependencyCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.PollDependencyCountArgs>;

export const PollDependencyCountZodSchema = z.object({ orderBy: z.union([PollDependencyOrderByWithRelationInputObjectSchema, PollDependencyOrderByWithRelationInputObjectSchema.array()]).optional(), where: PollDependencyWhereInputObjectSchema.optional(), cursor: PollDependencyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PollDependencyCountAggregateInputObjectSchema ]).optional() }).strict();