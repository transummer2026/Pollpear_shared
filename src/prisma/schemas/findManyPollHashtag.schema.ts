import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollHashtagOrderByWithRelationInputObjectSchema as PollHashtagOrderByWithRelationInputObjectSchema } from './objects/PollHashtagOrderByWithRelationInput.schema';
import { PollHashtagWhereInputObjectSchema as PollHashtagWhereInputObjectSchema } from './objects/PollHashtagWhereInput.schema';
import { PollHashtagWhereUniqueInputObjectSchema as PollHashtagWhereUniqueInputObjectSchema } from './objects/PollHashtagWhereUniqueInput.schema';
import { PollHashtagScalarFieldEnumSchema } from './enums/PollHashtagScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PollHashtagFindManySelectSchema: z.ZodType<Prisma.PollHashtagSelect> = z.object({
    pollId: z.boolean().optional(),
    hashtagId: z.boolean().optional(),
    poll: z.boolean().optional(),
    hashtag: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PollHashtagSelect>;

export const PollHashtagFindManySelectZodSchema = z.object({
    pollId: z.boolean().optional(),
    hashtagId: z.boolean().optional(),
    poll: z.boolean().optional(),
    hashtag: z.boolean().optional()
  }).strict();

export const PollHashtagFindManySchema: z.ZodType<Prisma.PollHashtagFindManyArgs> = z.object({ select: PollHashtagFindManySelectSchema.optional(),  orderBy: z.union([PollHashtagOrderByWithRelationInputObjectSchema, PollHashtagOrderByWithRelationInputObjectSchema.array()]).optional(), where: PollHashtagWhereInputObjectSchema.optional(), cursor: PollHashtagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PollHashtagScalarFieldEnumSchema, PollHashtagScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PollHashtagFindManyArgs>;

export const PollHashtagFindManyZodSchema = z.object({ select: PollHashtagFindManySelectSchema.optional(),  orderBy: z.union([PollHashtagOrderByWithRelationInputObjectSchema, PollHashtagOrderByWithRelationInputObjectSchema.array()]).optional(), where: PollHashtagWhereInputObjectSchema.optional(), cursor: PollHashtagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PollHashtagScalarFieldEnumSchema, PollHashtagScalarFieldEnumSchema.array()]).optional() }).strict();