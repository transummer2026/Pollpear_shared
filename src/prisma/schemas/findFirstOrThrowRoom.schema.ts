import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { RoomIncludeObjectSchema as RoomIncludeObjectSchema } from './objects/RoomInclude.schema';
import { RoomOrderByWithRelationInputObjectSchema as RoomOrderByWithRelationInputObjectSchema } from './objects/RoomOrderByWithRelationInput.schema';
import { RoomWhereInputObjectSchema as RoomWhereInputObjectSchema } from './objects/RoomWhereInput.schema';
import { RoomWhereUniqueInputObjectSchema as RoomWhereUniqueInputObjectSchema } from './objects/RoomWhereUniqueInput.schema';
import { RoomScalarFieldEnumSchema } from './enums/RoomScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RoomFindFirstOrThrowSelectSchema: z.ZodType<Prisma.RoomSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    bannerUrl: z.boolean().optional(),
    endsAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    visibility: z.boolean().optional(),
    status: z.boolean().optional(),
    createdById: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    polls: z.boolean().optional(),
    messages: z.boolean().optional(),
    invitations: z.boolean().optional(),
    roomMembers: z.boolean().optional(),
    reports: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.RoomSelect>;

export const RoomFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    bannerUrl: z.boolean().optional(),
    endsAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    visibility: z.boolean().optional(),
    status: z.boolean().optional(),
    createdById: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    polls: z.boolean().optional(),
    messages: z.boolean().optional(),
    invitations: z.boolean().optional(),
    roomMembers: z.boolean().optional(),
    reports: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const RoomFindFirstOrThrowSchema: z.ZodType<Prisma.RoomFindFirstOrThrowArgs> = z.object({ select: RoomFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => RoomIncludeObjectSchema.optional()), orderBy: z.union([RoomOrderByWithRelationInputObjectSchema, RoomOrderByWithRelationInputObjectSchema.array()]).optional(), where: RoomWhereInputObjectSchema.optional(), cursor: RoomWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RoomScalarFieldEnumSchema, RoomScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.RoomFindFirstOrThrowArgs>;

export const RoomFindFirstOrThrowZodSchema = z.object({ select: RoomFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => RoomIncludeObjectSchema.optional()), orderBy: z.union([RoomOrderByWithRelationInputObjectSchema, RoomOrderByWithRelationInputObjectSchema.array()]).optional(), where: RoomWhereInputObjectSchema.optional(), cursor: RoomWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RoomScalarFieldEnumSchema, RoomScalarFieldEnumSchema.array()]).optional() }).strict();