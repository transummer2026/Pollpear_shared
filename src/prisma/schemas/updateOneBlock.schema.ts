import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BlockUpdateInputObjectSchema as BlockUpdateInputObjectSchema } from './objects/BlockUpdateInput.schema';
import { BlockUncheckedUpdateInputObjectSchema as BlockUncheckedUpdateInputObjectSchema } from './objects/BlockUncheckedUpdateInput.schema';
import { BlockWhereUniqueInputObjectSchema as BlockWhereUniqueInputObjectSchema } from './objects/BlockWhereUniqueInput.schema';

export const BlockUpdateOneSchema: z.ZodType<Prisma.BlockUpdateArgs> = z.object({   data: z.union([BlockUpdateInputObjectSchema, BlockUncheckedUpdateInputObjectSchema]), where: BlockWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BlockUpdateArgs>;

export const BlockUpdateOneZodSchema = z.object({   data: z.union([BlockUpdateInputObjectSchema, BlockUncheckedUpdateInputObjectSchema]), where: BlockWhereUniqueInputObjectSchema }).strict();