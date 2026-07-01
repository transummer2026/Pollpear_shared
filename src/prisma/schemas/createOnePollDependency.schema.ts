import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollDependencyUncheckedCreateInputObjectSchema as PollDependencyUncheckedCreateInputObjectSchema } from './objects/PollDependencyUncheckedCreateInput.schema';

export const PollDependencyCreateOneSchema: z.ZodType<Prisma.PollDependencyCreateArgs> = z.object({   data: PollDependencyUncheckedCreateInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PollDependencyCreateArgs>;

export const PollDependencyCreateOneZodSchema = z.object({   data: PollDependencyUncheckedCreateInputObjectSchema }).strict();