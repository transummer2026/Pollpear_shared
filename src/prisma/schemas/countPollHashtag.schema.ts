import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollHashtagOrderByWithRelationInputObjectSchema as PollHashtagOrderByWithRelationInputObjectSchema } from './objects/PollHashtagOrderByWithRelationInput.schema';
import { PollHashtagWhereInputObjectSchema as PollHashtagWhereInputObjectSchema } from './objects/PollHashtagWhereInput.schema';
import { PollHashtagWhereUniqueInputObjectSchema as PollHashtagWhereUniqueInputObjectSchema } from './objects/PollHashtagWhereUniqueInput.schema';
import { PollHashtagCountAggregateInputObjectSchema as PollHashtagCountAggregateInputObjectSchema } from './objects/PollHashtagCountAggregateInput.schema';

export const PollHashtagCountSchema: z.ZodType<Prisma.PollHashtagCountArgs> = z.object({ orderBy: z.union([PollHashtagOrderByWithRelationInputObjectSchema, PollHashtagOrderByWithRelationInputObjectSchema.array()]).optional(), where: PollHashtagWhereInputObjectSchema.optional(), cursor: PollHashtagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PollHashtagCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.PollHashtagCountArgs>;

export const PollHashtagCountZodSchema = z.object({ orderBy: z.union([PollHashtagOrderByWithRelationInputObjectSchema, PollHashtagOrderByWithRelationInputObjectSchema.array()]).optional(), where: PollHashtagWhereInputObjectSchema.optional(), cursor: PollHashtagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PollHashtagCountAggregateInputObjectSchema ]).optional() }).strict();