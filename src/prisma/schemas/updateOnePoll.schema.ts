import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollUpdateInputObjectSchema as PollUpdateInputObjectSchema } from './objects/PollUpdateInput.schema';
import { PollUncheckedUpdateInputObjectSchema as PollUncheckedUpdateInputObjectSchema } from './objects/PollUncheckedUpdateInput.schema';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './objects/PollWhereUniqueInput.schema';

export const PollUpdateOneSchema: z.ZodType<Prisma.PollUpdateArgs> = z.object({   data: z.union([PollUpdateInputObjectSchema, PollUncheckedUpdateInputObjectSchema]), where: PollWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PollUpdateArgs>;

export const PollUpdateOneZodSchema = z.object({   data: z.union([PollUpdateInputObjectSchema, PollUncheckedUpdateInputObjectSchema]), where: PollWhereUniqueInputObjectSchema }).strict();