import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BlockSelectObjectSchema as BlockSelectObjectSchema } from './objects/BlockSelect.schema';
import { BlockIncludeObjectSchema as BlockIncludeObjectSchema } from './objects/BlockInclude.schema';
import { BlockCreateInputObjectSchema as BlockCreateInputObjectSchema } from './objects/BlockCreateInput.schema';
import { BlockUncheckedCreateInputObjectSchema as BlockUncheckedCreateInputObjectSchema } from './objects/BlockUncheckedCreateInput.schema';

export const BlockCreateOneSchema: z.ZodType<Prisma.BlockCreateArgs> = z.object({ select: BlockSelectObjectSchema.optional(), include: BlockIncludeObjectSchema.optional(), data: z.union([BlockCreateInputObjectSchema, BlockUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.BlockCreateArgs>;

export const BlockCreateOneZodSchema = z.object({ select: BlockSelectObjectSchema.optional(), include: BlockIncludeObjectSchema.optional(), data: z.union([BlockCreateInputObjectSchema, BlockUncheckedCreateInputObjectSchema]) }).strict();