import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { ReportIncludeObjectSchema as ReportIncludeObjectSchema } from './objects/ReportInclude.schema';
import { ReportOrderByWithRelationInputObjectSchema as ReportOrderByWithRelationInputObjectSchema } from './objects/ReportOrderByWithRelationInput.schema';
import { ReportWhereInputObjectSchema as ReportWhereInputObjectSchema } from './objects/ReportWhereInput.schema';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './objects/ReportWhereUniqueInput.schema';
import { ReportScalarFieldEnumSchema } from './enums/ReportScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ReportSelect> = z.object({
    id: z.boolean().optional(),
    reason: z.boolean().optional(),
    content: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    reporterId: z.boolean().optional(),
    reportedId: z.boolean().optional(),
    roomId: z.boolean().optional(),
    messageId: z.boolean().optional(),
    pollId: z.boolean().optional(),
    optionId: z.boolean().optional(),
    hashtagId: z.boolean().optional(),
    reporter: z.boolean().optional(),
    reported: z.boolean().optional(),
    room: z.boolean().optional(),
    message: z.boolean().optional(),
    poll: z.boolean().optional(),
    option: z.boolean().optional(),
    hashtag: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ReportSelect>;

export const ReportFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    reason: z.boolean().optional(),
    content: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    reporterId: z.boolean().optional(),
    reportedId: z.boolean().optional(),
    roomId: z.boolean().optional(),
    messageId: z.boolean().optional(),
    pollId: z.boolean().optional(),
    optionId: z.boolean().optional(),
    hashtagId: z.boolean().optional(),
    reporter: z.boolean().optional(),
    reported: z.boolean().optional(),
    room: z.boolean().optional(),
    message: z.boolean().optional(),
    poll: z.boolean().optional(),
    option: z.boolean().optional(),
    hashtag: z.boolean().optional()
  }).strict();

export const ReportFindFirstOrThrowSchema: z.ZodType<Prisma.ReportFindFirstOrThrowArgs> = z.object({ select: ReportFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ReportIncludeObjectSchema.optional()), orderBy: z.union([ReportOrderByWithRelationInputObjectSchema, ReportOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportWhereInputObjectSchema.optional(), cursor: ReportWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReportScalarFieldEnumSchema, ReportScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ReportFindFirstOrThrowArgs>;

export const ReportFindFirstOrThrowZodSchema = z.object({ select: ReportFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ReportIncludeObjectSchema.optional()), orderBy: z.union([ReportOrderByWithRelationInputObjectSchema, ReportOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportWhereInputObjectSchema.optional(), cursor: ReportWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReportScalarFieldEnumSchema, ReportScalarFieldEnumSchema.array()]).optional() }).strict();