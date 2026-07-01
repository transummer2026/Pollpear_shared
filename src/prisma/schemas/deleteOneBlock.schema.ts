import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BlockWhereUniqueInputObjectSchema as BlockWhereUniqueInputObjectSchema } from './objects/BlockWhereUniqueInput.schema';

export const BlockDeleteOneSchema: z.ZodType<Prisma.BlockDeleteArgs> = z.object({   where: BlockWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BlockDeleteArgs>;

export const BlockDeleteOneZodSchema = z.object({   where: BlockWhereUniqueInputObjectSchema }).strict();