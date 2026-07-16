import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BlockUpdateManyMutationInputObjectSchema as BlockUpdateManyMutationInputObjectSchema } from './objects/BlockUpdateManyMutationInput.schema';
import { BlockWhereInputObjectSchema as BlockWhereInputObjectSchema } from './objects/BlockWhereInput.schema';

export const BlockUpdateManySchema: z.ZodType<Prisma.BlockUpdateManyArgs> = z.object({ data: BlockUpdateManyMutationInputObjectSchema, where: BlockWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BlockUpdateManyArgs>;

export const BlockUpdateManyZodSchema = z.object({ data: BlockUpdateManyMutationInputObjectSchema, where: BlockWhereInputObjectSchema.optional() }).strict();