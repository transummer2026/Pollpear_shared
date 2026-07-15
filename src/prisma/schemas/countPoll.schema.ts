import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollOrderByWithRelationInputObjectSchema as PollOrderByWithRelationInputObjectSchema } from './objects/PollOrderByWithRelationInput.schema';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './objects/PollWhereInput.schema';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './objects/PollWhereUniqueInput.schema';
import { PollCountAggregateInputObjectSchema as PollCountAggregateInputObjectSchema } from './objects/PollCountAggregateInput.schema';

export const PollCountSchema: z.ZodType<Prisma.PollCountArgs> = z.object({ orderBy: z.union([PollOrderByWithRelationInputObjectSchema, PollOrderByWithRelationInputObjectSchema.array()]).optional(), where: PollWhereInputObjectSchema.optional(), cursor: PollWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PollCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.PollCountArgs>;

export const PollCountZodSchema = z.object({ orderBy: z.union([PollOrderByWithRelationInputObjectSchema, PollOrderByWithRelationInputObjectSchema.array()]).optional(), where: PollWhereInputObjectSchema.optional(), cursor: PollWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PollCountAggregateInputObjectSchema ]).optional() }).strict();