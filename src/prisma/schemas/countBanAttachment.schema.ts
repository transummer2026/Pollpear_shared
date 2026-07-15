import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BanAttachmentOrderByWithRelationInputObjectSchema as BanAttachmentOrderByWithRelationInputObjectSchema } from './objects/BanAttachmentOrderByWithRelationInput.schema';
import { BanAttachmentWhereInputObjectSchema as BanAttachmentWhereInputObjectSchema } from './objects/BanAttachmentWhereInput.schema';
import { BanAttachmentWhereUniqueInputObjectSchema as BanAttachmentWhereUniqueInputObjectSchema } from './objects/BanAttachmentWhereUniqueInput.schema';
import { BanAttachmentCountAggregateInputObjectSchema as BanAttachmentCountAggregateInputObjectSchema } from './objects/BanAttachmentCountAggregateInput.schema';

export const BanAttachmentCountSchema: z.ZodType<Prisma.BanAttachmentCountArgs> = z.object({ orderBy: z.union([BanAttachmentOrderByWithRelationInputObjectSchema, BanAttachmentOrderByWithRelationInputObjectSchema.array()]).optional(), where: BanAttachmentWhereInputObjectSchema.optional(), cursor: BanAttachmentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BanAttachmentCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.BanAttachmentCountArgs>;

export const BanAttachmentCountZodSchema = z.object({ orderBy: z.union([BanAttachmentOrderByWithRelationInputObjectSchema, BanAttachmentOrderByWithRelationInputObjectSchema.array()]).optional(), where: BanAttachmentWhereInputObjectSchema.optional(), cursor: BanAttachmentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BanAttachmentCountAggregateInputObjectSchema ]).optional() }).strict();