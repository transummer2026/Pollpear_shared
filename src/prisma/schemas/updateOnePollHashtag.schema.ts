import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollHashtagSelectObjectSchema as PollHashtagSelectObjectSchema } from './objects/PollHashtagSelect.schema';
import { PollHashtagIncludeObjectSchema as PollHashtagIncludeObjectSchema } from './objects/PollHashtagInclude.schema';
import { PollHashtagUpdateInputObjectSchema as PollHashtagUpdateInputObjectSchema } from './objects/PollHashtagUpdateInput.schema';
import { PollHashtagUncheckedUpdateInputObjectSchema as PollHashtagUncheckedUpdateInputObjectSchema } from './objects/PollHashtagUncheckedUpdateInput.schema';
import { PollHashtagWhereUniqueInputObjectSchema as PollHashtagWhereUniqueInputObjectSchema } from './objects/PollHashtagWhereUniqueInput.schema';

export const PollHashtagUpdateOneSchema: z.ZodType<Prisma.PollHashtagUpdateArgs> = z.object({ select: PollHashtagSelectObjectSchema.optional(), include: PollHashtagIncludeObjectSchema.optional(), data: z.union([PollHashtagUpdateInputObjectSchema, PollHashtagUncheckedUpdateInputObjectSchema]), where: PollHashtagWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PollHashtagUpdateArgs>;

export const PollHashtagUpdateOneZodSchema = z.object({ select: PollHashtagSelectObjectSchema.optional(), include: PollHashtagIncludeObjectSchema.optional(), data: z.union([PollHashtagUpdateInputObjectSchema, PollHashtagUncheckedUpdateInputObjectSchema]), where: PollHashtagWhereUniqueInputObjectSchema }).strict();