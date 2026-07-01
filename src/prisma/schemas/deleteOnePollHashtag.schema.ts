import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollHashtagWhereUniqueInputObjectSchema as PollHashtagWhereUniqueInputObjectSchema } from './objects/PollHashtagWhereUniqueInput.schema';

export const PollHashtagDeleteOneSchema: z.ZodType<Prisma.PollHashtagDeleteArgs> = z.object({   where: PollHashtagWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PollHashtagDeleteArgs>;

export const PollHashtagDeleteOneZodSchema = z.object({   where: PollHashtagWhereUniqueInputObjectSchema }).strict();