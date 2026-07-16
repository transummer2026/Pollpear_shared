import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { RoomMemberOrderByWithRelationInputObjectSchema as RoomMemberOrderByWithRelationInputObjectSchema } from './objects/RoomMemberOrderByWithRelationInput.schema';
import { RoomMemberWhereInputObjectSchema as RoomMemberWhereInputObjectSchema } from './objects/RoomMemberWhereInput.schema';
import { RoomMemberWhereUniqueInputObjectSchema as RoomMemberWhereUniqueInputObjectSchema } from './objects/RoomMemberWhereUniqueInput.schema';
import { RoomMemberCountAggregateInputObjectSchema as RoomMemberCountAggregateInputObjectSchema } from './objects/RoomMemberCountAggregateInput.schema';

export const RoomMemberCountSchema: z.ZodType<Prisma.RoomMemberCountArgs> = z.object({ orderBy: z.union([RoomMemberOrderByWithRelationInputObjectSchema, RoomMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: RoomMemberWhereInputObjectSchema.optional(), cursor: RoomMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RoomMemberCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.RoomMemberCountArgs>;

export const RoomMemberCountZodSchema = z.object({ orderBy: z.union([RoomMemberOrderByWithRelationInputObjectSchema, RoomMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: RoomMemberWhereInputObjectSchema.optional(), cursor: RoomMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RoomMemberCountAggregateInputObjectSchema ]).optional() }).strict();