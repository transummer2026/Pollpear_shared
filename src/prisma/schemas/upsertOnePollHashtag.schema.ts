import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollHashtagSelectObjectSchema as PollHashtagSelectObjectSchema } from './objects/PollHashtagSelect.schema';
import { PollHashtagIncludeObjectSchema as PollHashtagIncludeObjectSchema } from './objects/PollHashtagInclude.schema';
import { PollHashtagWhereUniqueInputObjectSchema as PollHashtagWhereUniqueInputObjectSchema } from './objects/PollHashtagWhereUniqueInput.schema';
import { PollHashtagCreateInputObjectSchema as PollHashtagCreateInputObjectSchema } from './objects/PollHashtagCreateInput.schema';
import { PollHashtagUncheckedCreateInputObjectSchema as PollHashtagUncheckedCreateInputObjectSchema } from './objects/PollHashtagUncheckedCreateInput.schema';
import { PollHashtagUpdateInputObjectSchema as PollHashtagUpdateInputObjectSchema } from './objects/PollHashtagUpdateInput.schema';
import { PollHashtagUncheckedUpdateInputObjectSchema as PollHashtagUncheckedUpdateInputObjectSchema } from './objects/PollHashtagUncheckedUpdateInput.schema';

export const PollHashtagUpsertOneSchema: z.ZodType<Prisma.PollHashtagUpsertArgs> = z.object({ select: PollHashtagSelectObjectSchema.optional(), include: PollHashtagIncludeObjectSchema.optional(), where: PollHashtagWhereUniqueInputObjectSchema, create: z.union([ PollHashtagCreateInputObjectSchema, PollHashtagUncheckedCreateInputObjectSchema ]), update: z.union([ PollHashtagUpdateInputObjectSchema, PollHashtagUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.PollHashtagUpsertArgs>;

export const PollHashtagUpsertOneZodSchema = z.object({ select: PollHashtagSelectObjectSchema.optional(), include: PollHashtagIncludeObjectSchema.optional(), where: PollHashtagWhereUniqueInputObjectSchema, create: z.union([ PollHashtagCreateInputObjectSchema, PollHashtagUncheckedCreateInputObjectSchema ]), update: z.union([ PollHashtagUpdateInputObjectSchema, PollHashtagUncheckedUpdateInputObjectSchema ]) }).strict();