import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { VoteSelectObjectSchema as VoteSelectObjectSchema } from './objects/VoteSelect.schema';
import { VoteIncludeObjectSchema as VoteIncludeObjectSchema } from './objects/VoteInclude.schema';
import { VoteWhereUniqueInputObjectSchema as VoteWhereUniqueInputObjectSchema } from './objects/VoteWhereUniqueInput.schema';
import { VoteCreateInputObjectSchema as VoteCreateInputObjectSchema } from './objects/VoteCreateInput.schema';
import { VoteUncheckedCreateInputObjectSchema as VoteUncheckedCreateInputObjectSchema } from './objects/VoteUncheckedCreateInput.schema';
import { VoteUpdateInputObjectSchema as VoteUpdateInputObjectSchema } from './objects/VoteUpdateInput.schema';
import { VoteUncheckedUpdateInputObjectSchema as VoteUncheckedUpdateInputObjectSchema } from './objects/VoteUncheckedUpdateInput.schema';

export const VoteUpsertOneSchema: z.ZodType<Prisma.VoteUpsertArgs> = z.object({ select: VoteSelectObjectSchema.optional(), include: VoteIncludeObjectSchema.optional(), where: VoteWhereUniqueInputObjectSchema, create: z.union([ VoteCreateInputObjectSchema, VoteUncheckedCreateInputObjectSchema ]), update: z.union([ VoteUpdateInputObjectSchema, VoteUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.VoteUpsertArgs>;

export const VoteUpsertOneZodSchema = z.object({ select: VoteSelectObjectSchema.optional(), include: VoteIncludeObjectSchema.optional(), where: VoteWhereUniqueInputObjectSchema, create: z.union([ VoteCreateInputObjectSchema, VoteUncheckedCreateInputObjectSchema ]), update: z.union([ VoteUpdateInputObjectSchema, VoteUncheckedUpdateInputObjectSchema ]) }).strict();