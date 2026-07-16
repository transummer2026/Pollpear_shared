import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BlockSelectObjectSchema as BlockSelectObjectSchema } from './objects/BlockSelect.schema';
import { BlockUpdateManyMutationInputObjectSchema as BlockUpdateManyMutationInputObjectSchema } from './objects/BlockUpdateManyMutationInput.schema';
import { BlockWhereInputObjectSchema as BlockWhereInputObjectSchema } from './objects/BlockWhereInput.schema';

export const BlockUpdateManyAndReturnSchema: z.ZodType<Prisma.BlockUpdateManyAndReturnArgs> = z.object({ select: BlockSelectObjectSchema.optional(), data: BlockUpdateManyMutationInputObjectSchema, where: BlockWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BlockUpdateManyAndReturnArgs>;

export const BlockUpdateManyAndReturnZodSchema = z.object({ select: BlockSelectObjectSchema.optional(), data: BlockUpdateManyMutationInputObjectSchema, where: BlockWhereInputObjectSchema.optional() }).strict();