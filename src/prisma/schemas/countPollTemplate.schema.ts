import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollTemplateOrderByWithRelationInputObjectSchema as PollTemplateOrderByWithRelationInputObjectSchema } from './objects/PollTemplateOrderByWithRelationInput.schema';
import { PollTemplateWhereInputObjectSchema as PollTemplateWhereInputObjectSchema } from './objects/PollTemplateWhereInput.schema';
import { PollTemplateWhereUniqueInputObjectSchema as PollTemplateWhereUniqueInputObjectSchema } from './objects/PollTemplateWhereUniqueInput.schema';
import { PollTemplateCountAggregateInputObjectSchema as PollTemplateCountAggregateInputObjectSchema } from './objects/PollTemplateCountAggregateInput.schema';

export const PollTemplateCountSchema: z.ZodType<Prisma.PollTemplateCountArgs> = z.object({ orderBy: z.union([PollTemplateOrderByWithRelationInputObjectSchema, PollTemplateOrderByWithRelationInputObjectSchema.array()]).optional(), where: PollTemplateWhereInputObjectSchema.optional(), cursor: PollTemplateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PollTemplateCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.PollTemplateCountArgs>;

export const PollTemplateCountZodSchema = z.object({ orderBy: z.union([PollTemplateOrderByWithRelationInputObjectSchema, PollTemplateOrderByWithRelationInputObjectSchema.array()]).optional(), where: PollTemplateWhereInputObjectSchema.optional(), cursor: PollTemplateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PollTemplateCountAggregateInputObjectSchema ]).optional() }).strict();