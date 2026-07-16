import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollSelectObjectSchema as PollSelectObjectSchema } from './objects/PollSelect.schema';
import { PollIncludeObjectSchema as PollIncludeObjectSchema } from './objects/PollInclude.schema';
import { PollCreateInputObjectSchema as PollCreateInputObjectSchema } from './objects/PollCreateInput.schema';
import { PollUncheckedCreateInputObjectSchema as PollUncheckedCreateInputObjectSchema } from './objects/PollUncheckedCreateInput.schema';

export const PollCreateOneSchema: z.ZodType<Prisma.PollCreateArgs> = z.object({ select: PollSelectObjectSchema.optional(), include: PollIncludeObjectSchema.optional(), data: z.union([PollCreateInputObjectSchema, PollUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.PollCreateArgs>;

export const PollCreateOneZodSchema = z.object({ select: PollSelectObjectSchema.optional(), include: PollIncludeObjectSchema.optional(), data: z.union([PollCreateInputObjectSchema, PollUncheckedCreateInputObjectSchema]) }).strict();