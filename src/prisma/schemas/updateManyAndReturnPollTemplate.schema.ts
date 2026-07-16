import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollTemplateSelectObjectSchema as PollTemplateSelectObjectSchema } from './objects/PollTemplateSelect.schema';
import { PollTemplateUpdateManyMutationInputObjectSchema as PollTemplateUpdateManyMutationInputObjectSchema } from './objects/PollTemplateUpdateManyMutationInput.schema';
import { PollTemplateWhereInputObjectSchema as PollTemplateWhereInputObjectSchema } from './objects/PollTemplateWhereInput.schema';

export const PollTemplateUpdateManyAndReturnSchema: z.ZodType<Prisma.PollTemplateUpdateManyAndReturnArgs> = z.object({ select: PollTemplateSelectObjectSchema.optional(), data: PollTemplateUpdateManyMutationInputObjectSchema, where: PollTemplateWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PollTemplateUpdateManyAndReturnArgs>;

export const PollTemplateUpdateManyAndReturnZodSchema = z.object({ select: PollTemplateSelectObjectSchema.optional(), data: PollTemplateUpdateManyMutationInputObjectSchema, where: PollTemplateWhereInputObjectSchema.optional() }).strict();