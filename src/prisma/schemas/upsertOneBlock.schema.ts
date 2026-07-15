import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BlockSelectObjectSchema as BlockSelectObjectSchema } from './objects/BlockSelect.schema';
import { BlockIncludeObjectSchema as BlockIncludeObjectSchema } from './objects/BlockInclude.schema';
import { BlockWhereUniqueInputObjectSchema as BlockWhereUniqueInputObjectSchema } from './objects/BlockWhereUniqueInput.schema';
import { BlockCreateInputObjectSchema as BlockCreateInputObjectSchema } from './objects/BlockCreateInput.schema';
import { BlockUncheckedCreateInputObjectSchema as BlockUncheckedCreateInputObjectSchema } from './objects/BlockUncheckedCreateInput.schema';
import { BlockUpdateInputObjectSchema as BlockUpdateInputObjectSchema } from './objects/BlockUpdateInput.schema';
import { BlockUncheckedUpdateInputObjectSchema as BlockUncheckedUpdateInputObjectSchema } from './objects/BlockUncheckedUpdateInput.schema';

export const BlockUpsertOneSchema: z.ZodType<Prisma.BlockUpsertArgs> = z.object({ select: BlockSelectObjectSchema.optional(), include: BlockIncludeObjectSchema.optional(), where: BlockWhereUniqueInputObjectSchema, create: z.union([ BlockCreateInputObjectSchema, BlockUncheckedCreateInputObjectSchema ]), update: z.union([ BlockUpdateInputObjectSchema, BlockUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.BlockUpsertArgs>;

export const BlockUpsertOneZodSchema = z.object({ select: BlockSelectObjectSchema.optional(), include: BlockIncludeObjectSchema.optional(), where: BlockWhereUniqueInputObjectSchema, create: z.union([ BlockCreateInputObjectSchema, BlockUncheckedCreateInputObjectSchema ]), update: z.union([ BlockUpdateInputObjectSchema, BlockUncheckedUpdateInputObjectSchema ]) }).strict();