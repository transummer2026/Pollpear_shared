import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './objects/PollWhereUniqueInput.schema';

export const PollFindUniqueSchema: z.ZodType<Prisma.PollFindUniqueArgs> = z.object({   where: PollWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PollFindUniqueArgs>;

export const PollFindUniqueZodSchema = z.object({   where: PollWhereUniqueInputObjectSchema }).strict();