import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BlockSelectObjectSchema as BlockSelectObjectSchema } from './objects/BlockSelect.schema';
import { BlockIncludeObjectSchema as BlockIncludeObjectSchema } from './objects/BlockInclude.schema';
import { BlockWhereUniqueInputObjectSchema as BlockWhereUniqueInputObjectSchema } from './objects/BlockWhereUniqueInput.schema';

export const BlockDeleteOneSchema: z.ZodType<Prisma.BlockDeleteArgs> = z.object({ select: BlockSelectObjectSchema.optional(), include: BlockIncludeObjectSchema.optional(), where: BlockWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BlockDeleteArgs>;

export const BlockDeleteOneZodSchema = z.object({ select: BlockSelectObjectSchema.optional(), include: BlockIncludeObjectSchema.optional(), where: BlockWhereUniqueInputObjectSchema }).strict();