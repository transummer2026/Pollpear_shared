import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { VoteSelectObjectSchema as VoteSelectObjectSchema } from './objects/VoteSelect.schema';
import { VoteIncludeObjectSchema as VoteIncludeObjectSchema } from './objects/VoteInclude.schema';
import { VoteCreateInputObjectSchema as VoteCreateInputObjectSchema } from './objects/VoteCreateInput.schema';
import { VoteUncheckedCreateInputObjectSchema as VoteUncheckedCreateInputObjectSchema } from './objects/VoteUncheckedCreateInput.schema';

export const VoteCreateOneSchema: z.ZodType<Prisma.VoteCreateArgs> = z.object({ select: VoteSelectObjectSchema.optional(), include: VoteIncludeObjectSchema.optional(), data: z.union([VoteCreateInputObjectSchema, VoteUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.VoteCreateArgs>;

export const VoteCreateOneZodSchema = z.object({ select: VoteSelectObjectSchema.optional(), include: VoteIncludeObjectSchema.optional(), data: z.union([VoteCreateInputObjectSchema, VoteUncheckedCreateInputObjectSchema]) }).strict();