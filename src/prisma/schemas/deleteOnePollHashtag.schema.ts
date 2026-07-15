import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollHashtagSelectObjectSchema as PollHashtagSelectObjectSchema } from './objects/PollHashtagSelect.schema';
import { PollHashtagIncludeObjectSchema as PollHashtagIncludeObjectSchema } from './objects/PollHashtagInclude.schema';
import { PollHashtagWhereUniqueInputObjectSchema as PollHashtagWhereUniqueInputObjectSchema } from './objects/PollHashtagWhereUniqueInput.schema';

export const PollHashtagDeleteOneSchema: z.ZodType<Prisma.PollHashtagDeleteArgs> = z.object({ select: PollHashtagSelectObjectSchema.optional(), include: PollHashtagIncludeObjectSchema.optional(), where: PollHashtagWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PollHashtagDeleteArgs>;

export const PollHashtagDeleteOneZodSchema = z.object({ select: PollHashtagSelectObjectSchema.optional(), include: PollHashtagIncludeObjectSchema.optional(), where: PollHashtagWhereUniqueInputObjectSchema }).strict();