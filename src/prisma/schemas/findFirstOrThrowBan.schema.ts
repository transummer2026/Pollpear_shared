import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BanIncludeObjectSchema as BanIncludeObjectSchema } from './objects/BanInclude.schema';
import { BanOrderByWithRelationInputObjectSchema as BanOrderByWithRelationInputObjectSchema } from './objects/BanOrderByWithRelationInput.schema';
import { BanWhereInputObjectSchema as BanWhereInputObjectSchema } from './objects/BanWhereInput.schema';
import { BanWhereUniqueInputObjectSchema as BanWhereUniqueInputObjectSchema } from './objects/BanWhereUniqueInput.schema';
import { BanScalarFieldEnumSchema } from './enums/BanScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BanFindFirstOrThrowSelectSchema: z.ZodType<Prisma.BanSelect> = z.object({
    id: z.boolean().optional(),
    banReason: z.boolean().optional(),
    bannedAt: z.boolean().optional(),
    unbannedAt: z.boolean().optional(),
    unbanReason: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    userId: z.boolean().optional(),
    bannedById: z.boolean().optional(),
    unbannedById: z.boolean().optional(),
    user: z.boolean().optional(),
    bannedBy: z.boolean().optional(),
    unbannedBy: z.boolean().optional(),
    attachments: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.BanSelect>;

export const BanFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    banReason: z.boolean().optional(),
    bannedAt: z.boolean().optional(),
    unbannedAt: z.boolean().optional(),
    unbanReason: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    userId: z.boolean().optional(),
    bannedById: z.boolean().optional(),
    unbannedById: z.boolean().optional(),
    user: z.boolean().optional(),
    bannedBy: z.boolean().optional(),
    unbannedBy: z.boolean().optional(),
    attachments: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const BanFindFirstOrThrowSchema: z.ZodType<Prisma.BanFindFirstOrThrowArgs> = z.object({ select: BanFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => BanIncludeObjectSchema.optional()), orderBy: z.union([BanOrderByWithRelationInputObjectSchema, BanOrderByWithRelationInputObjectSchema.array()]).optional(), where: BanWhereInputObjectSchema.optional(), cursor: BanWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BanScalarFieldEnumSchema, BanScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.BanFindFirstOrThrowArgs>;

export const BanFindFirstOrThrowZodSchema = z.object({ select: BanFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => BanIncludeObjectSchema.optional()), orderBy: z.union([BanOrderByWithRelationInputObjectSchema, BanOrderByWithRelationInputObjectSchema.array()]).optional(), where: BanWhereInputObjectSchema.optional(), cursor: BanWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BanScalarFieldEnumSchema, BanScalarFieldEnumSchema.array()]).optional() }).strict();