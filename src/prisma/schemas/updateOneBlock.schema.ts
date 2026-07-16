import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BlockSelectObjectSchema as BlockSelectObjectSchema } from './objects/BlockSelect.schema';
import { BlockIncludeObjectSchema as BlockIncludeObjectSchema } from './objects/BlockInclude.schema';
import { BlockUpdateInputObjectSchema as BlockUpdateInputObjectSchema } from './objects/BlockUpdateInput.schema';
import { BlockUncheckedUpdateInputObjectSchema as BlockUncheckedUpdateInputObjectSchema } from './objects/BlockUncheckedUpdateInput.schema';
import { BlockWhereUniqueInputObjectSchema as BlockWhereUniqueInputObjectSchema } from './objects/BlockWhereUniqueInput.schema';

export const BlockUpdateOneSchema: z.ZodType<Prisma.BlockUpdateArgs> = z.object({ select: BlockSelectObjectSchema.optional(), include: BlockIncludeObjectSchema.optional(), data: z.union([BlockUpdateInputObjectSchema, BlockUncheckedUpdateInputObjectSchema]), where: BlockWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BlockUpdateArgs>;

export const BlockUpdateOneZodSchema = z.object({ select: BlockSelectObjectSchema.optional(), include: BlockIncludeObjectSchema.optional(), data: z.union([BlockUpdateInputObjectSchema, BlockUncheckedUpdateInputObjectSchema]), where: BlockWhereUniqueInputObjectSchema }).strict();