import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollUncheckedCreateInputObjectSchema as PollUncheckedCreateInputObjectSchema } from './objects/PollUncheckedCreateInput.schema';

export const PollCreateOneSchema: z.ZodType<Prisma.PollCreateArgs> = z.object({   data: PollUncheckedCreateInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PollCreateArgs>;

export const PollCreateOneZodSchema = z.object({   data: PollUncheckedCreateInputObjectSchema }).strict();