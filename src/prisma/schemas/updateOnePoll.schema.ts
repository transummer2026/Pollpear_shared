import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollSelectObjectSchema as PollSelectObjectSchema } from './objects/PollSelect.schema';
import { PollIncludeObjectSchema as PollIncludeObjectSchema } from './objects/PollInclude.schema';
import { PollUpdateInputObjectSchema as PollUpdateInputObjectSchema } from './objects/PollUpdateInput.schema';
import { PollUncheckedUpdateInputObjectSchema as PollUncheckedUpdateInputObjectSchema } from './objects/PollUncheckedUpdateInput.schema';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './objects/PollWhereUniqueInput.schema';

export const PollUpdateOneSchema: z.ZodType<Prisma.PollUpdateArgs> = z.object({ select: PollSelectObjectSchema.optional(), include: PollIncludeObjectSchema.optional(), data: z.union([PollUpdateInputObjectSchema, PollUncheckedUpdateInputObjectSchema]), where: PollWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PollUpdateArgs>;

export const PollUpdateOneZodSchema = z.object({ select: PollSelectObjectSchema.optional(), include: PollIncludeObjectSchema.optional(), data: z.union([PollUpdateInputObjectSchema, PollUncheckedUpdateInputObjectSchema]), where: PollWhereUniqueInputObjectSchema }).strict();