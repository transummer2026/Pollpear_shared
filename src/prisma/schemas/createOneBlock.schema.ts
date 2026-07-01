import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BlockUncheckedCreateInputObjectSchema as BlockUncheckedCreateInputObjectSchema } from './objects/BlockUncheckedCreateInput.schema';

export const BlockCreateOneSchema: z.ZodType<Prisma.BlockCreateArgs> = z.object({   data: BlockUncheckedCreateInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BlockCreateArgs>;

export const BlockCreateOneZodSchema = z.object({   data: BlockUncheckedCreateInputObjectSchema }).strict();