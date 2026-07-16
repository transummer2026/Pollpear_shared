import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { VoteSelectObjectSchema as VoteSelectObjectSchema } from './objects/VoteSelect.schema';
import { VoteUpdateManyMutationInputObjectSchema as VoteUpdateManyMutationInputObjectSchema } from './objects/VoteUpdateManyMutationInput.schema';
import { VoteWhereInputObjectSchema as VoteWhereInputObjectSchema } from './objects/VoteWhereInput.schema';

export const VoteUpdateManyAndReturnSchema: z.ZodType<Prisma.VoteUpdateManyAndReturnArgs> = z.object({ select: VoteSelectObjectSchema.optional(), data: VoteUpdateManyMutationInputObjectSchema, where: VoteWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VoteUpdateManyAndReturnArgs>;

export const VoteUpdateManyAndReturnZodSchema = z.object({ select: VoteSelectObjectSchema.optional(), data: VoteUpdateManyMutationInputObjectSchema, where: VoteWhereInputObjectSchema.optional() }).strict();