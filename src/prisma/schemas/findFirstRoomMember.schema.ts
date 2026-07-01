import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { RoomMemberOrderByWithRelationInputObjectSchema as RoomMemberOrderByWithRelationInputObjectSchema } from './objects/RoomMemberOrderByWithRelationInput.schema';
import { RoomMemberWhereInputObjectSchema as RoomMemberWhereInputObjectSchema } from './objects/RoomMemberWhereInput.schema';
import { RoomMemberWhereUniqueInputObjectSchema as RoomMemberWhereUniqueInputObjectSchema } from './objects/RoomMemberWhereUniqueInput.schema';
import { RoomMemberScalarFieldEnumSchema } from './enums/RoomMemberScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RoomMemberFindFirstSelectSchema: z.ZodType<Prisma.RoomMemberSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    joinedAt: z.boolean().optional(),
    roomId: z.boolean().optional(),
    userId: z.boolean().optional(),
    room: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.RoomMemberSelect>;

export const RoomMemberFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    joinedAt: z.boolean().optional(),
    roomId: z.boolean().optional(),
    userId: z.boolean().optional(),
    room: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const RoomMemberFindFirstSchema: z.ZodType<Prisma.RoomMemberFindFirstArgs> = z.object({ select: RoomMemberFindFirstSelectSchema.optional(),  orderBy: z.union([RoomMemberOrderByWithRelationInputObjectSchema, RoomMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: RoomMemberWhereInputObjectSchema.optional(), cursor: RoomMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RoomMemberScalarFieldEnumSchema, RoomMemberScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.RoomMemberFindFirstArgs>;

export const RoomMemberFindFirstZodSchema = z.object({ select: RoomMemberFindFirstSelectSchema.optional(),  orderBy: z.union([RoomMemberOrderByWithRelationInputObjectSchema, RoomMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: RoomMemberWhereInputObjectSchema.optional(), cursor: RoomMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RoomMemberScalarFieldEnumSchema, RoomMemberScalarFieldEnumSchema.array()]).optional() }).strict();