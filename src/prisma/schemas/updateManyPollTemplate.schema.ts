import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollTemplateUpdateManyMutationInputObjectSchema as PollTemplateUpdateManyMutationInputObjectSchema } from './objects/PollTemplateUpdateManyMutationInput.schema';
import { PollTemplateWhereInputObjectSchema as PollTemplateWhereInputObjectSchema } from './objects/PollTemplateWhereInput.schema';

export const PollTemplateUpdateManySchema: z.ZodType<Prisma.PollTemplateUpdateManyArgs> = z.object({ data: PollTemplateUpdateManyMutationInputObjectSchema, where: PollTemplateWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PollTemplateUpdateManyArgs>;

export const PollTemplateUpdateManyZodSchema = z.object({ data: PollTemplateUpdateManyMutationInputObjectSchema, where: PollTemplateWhereInputObjectSchema.optional() }).strict();