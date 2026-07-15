import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollHashtagIncludeObjectSchema as PollHashtagIncludeObjectSchema } from './objects/PollHashtagInclude.schema';
import { PollHashtagOrderByWithRelationInputObjectSchema as PollHashtagOrderByWithRelationInputObjectSchema } from './objects/PollHashtagOrderByWithRelationInput.schema';
import { PollHashtagWhereInputObjectSchema as PollHashtagWhereInputObjectSchema } from './objects/PollHashtagWhereInput.schema';
import { PollHashtagWhereUniqueInputObjectSchema as PollHashtagWhereUniqueInputObjectSchema } from './objects/PollHashtagWhereUniqueInput.schema';
import { PollHashtagScalarFieldEnumSchema } from './enums/PollHashtagScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PollHashtagFindFirstOrThrowSelectSchema: z.ZodType<Prisma.PollHashtagSelect> = z.object({
    pollId: z.boolean().optional(),
    hashtagId: z.boolean().optional(),
    poll: z.boolean().optional(),
    hashtag: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PollHashtagSelect>;

export const PollHashtagFindFirstOrThrowSelectZodSchema = z.object({
    pollId: z.boolean().optional(),
    hashtagId: z.boolean().optional(),
    poll: z.boolean().optional(),
    hashtag: z.boolean().optional()
  }).strict();

export const PollHashtagFindFirstOrThrowSchema: z.ZodType<Prisma.PollHashtagFindFirstOrThrowArgs> = z.object({ select: PollHashtagFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => PollHashtagIncludeObjectSchema.optional()), orderBy: z.union([PollHashtagOrderByWithRelationInputObjectSchema, PollHashtagOrderByWithRelationInputObjectSchema.array()]).optional(), where: PollHashtagWhereInputObjectSchema.optional(), cursor: PollHashtagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PollHashtagScalarFieldEnumSchema, PollHashtagScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PollHashtagFindFirstOrThrowArgs>;

export const PollHashtagFindFirstOrThrowZodSchema = z.object({ select: PollHashtagFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => PollHashtagIncludeObjectSchema.optional()), orderBy: z.union([PollHashtagOrderByWithRelationInputObjectSchema, PollHashtagOrderByWithRelationInputObjectSchema.array()]).optional(), where: PollHashtagWhereInputObjectSchema.optional(), cursor: PollHashtagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PollHashtagScalarFieldEnumSchema, PollHashtagScalarFieldEnumSchema.array()]).optional() }).strict();