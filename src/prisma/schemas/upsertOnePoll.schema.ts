import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollSelectObjectSchema as PollSelectObjectSchema } from './objects/PollSelect.schema';
import { PollIncludeObjectSchema as PollIncludeObjectSchema } from './objects/PollInclude.schema';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './objects/PollWhereUniqueInput.schema';
import { PollCreateInputObjectSchema as PollCreateInputObjectSchema } from './objects/PollCreateInput.schema';
import { PollUncheckedCreateInputObjectSchema as PollUncheckedCreateInputObjectSchema } from './objects/PollUncheckedCreateInput.schema';
import { PollUpdateInputObjectSchema as PollUpdateInputObjectSchema } from './objects/PollUpdateInput.schema';
import { PollUncheckedUpdateInputObjectSchema as PollUncheckedUpdateInputObjectSchema } from './objects/PollUncheckedUpdateInput.schema';

export const PollUpsertOneSchema: z.ZodType<Prisma.PollUpsertArgs> = z.object({ select: PollSelectObjectSchema.optional(), include: PollIncludeObjectSchema.optional(), where: PollWhereUniqueInputObjectSchema, create: z.union([ PollCreateInputObjectSchema, PollUncheckedCreateInputObjectSchema ]), update: z.union([ PollUpdateInputObjectSchema, PollUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.PollUpsertArgs>;

export const PollUpsertOneZodSchema = z.object({ select: PollSelectObjectSchema.optional(), include: PollIncludeObjectSchema.optional(), where: PollWhereUniqueInputObjectSchema, create: z.union([ PollCreateInputObjectSchema, PollUncheckedCreateInputObjectSchema ]), update: z.union([ PollUpdateInputObjectSchema, PollUncheckedUpdateInputObjectSchema ]) }).strict();