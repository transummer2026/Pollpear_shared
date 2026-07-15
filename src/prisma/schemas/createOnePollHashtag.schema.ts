import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollHashtagSelectObjectSchema as PollHashtagSelectObjectSchema } from './objects/PollHashtagSelect.schema';
import { PollHashtagIncludeObjectSchema as PollHashtagIncludeObjectSchema } from './objects/PollHashtagInclude.schema';
import { PollHashtagCreateInputObjectSchema as PollHashtagCreateInputObjectSchema } from './objects/PollHashtagCreateInput.schema';
import { PollHashtagUncheckedCreateInputObjectSchema as PollHashtagUncheckedCreateInputObjectSchema } from './objects/PollHashtagUncheckedCreateInput.schema';

export const PollHashtagCreateOneSchema: z.ZodType<Prisma.PollHashtagCreateArgs> = z.object({ select: PollHashtagSelectObjectSchema.optional(), include: PollHashtagIncludeObjectSchema.optional(), data: z.union([PollHashtagCreateInputObjectSchema, PollHashtagUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.PollHashtagCreateArgs>;

export const PollHashtagCreateOneZodSchema = z.object({ select: PollHashtagSelectObjectSchema.optional(), include: PollHashtagIncludeObjectSchema.optional(), data: z.union([PollHashtagCreateInputObjectSchema, PollHashtagUncheckedCreateInputObjectSchema]) }).strict();