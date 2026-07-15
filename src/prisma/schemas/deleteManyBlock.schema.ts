import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BlockWhereInputObjectSchema as BlockWhereInputObjectSchema } from './objects/BlockWhereInput.schema';

export const BlockDeleteManySchema: z.ZodType<Prisma.BlockDeleteManyArgs> = z.object({ where: BlockWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BlockDeleteManyArgs>;

export const BlockDeleteManyZodSchema = z.object({ where: BlockWhereInputObjectSchema.optional() }).strict();