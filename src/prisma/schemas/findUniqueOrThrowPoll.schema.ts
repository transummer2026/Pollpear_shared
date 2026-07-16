import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollSelectObjectSchema as PollSelectObjectSchema } from './objects/PollSelect.schema';
import { PollIncludeObjectSchema as PollIncludeObjectSchema } from './objects/PollInclude.schema';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './objects/PollWhereUniqueInput.schema';

export const PollFindUniqueOrThrowSchema: z.ZodType<Prisma.PollFindUniqueOrThrowArgs> = z.object({ select: PollSelectObjectSchema.optional(), include: PollIncludeObjectSchema.optional(), where: PollWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PollFindUniqueOrThrowArgs>;

export const PollFindUniqueOrThrowZodSchema = z.object({ select: PollSelectObjectSchema.optional(), include: PollIncludeObjectSchema.optional(), where: PollWhereUniqueInputObjectSchema }).strict();