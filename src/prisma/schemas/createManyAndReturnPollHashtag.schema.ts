import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollHashtagSelectObjectSchema as PollHashtagSelectObjectSchema } from './objects/PollHashtagSelect.schema';
import { PollHashtagCreateManyInputObjectSchema as PollHashtagCreateManyInputObjectSchema } from './objects/PollHashtagCreateManyInput.schema';

export const PollHashtagCreateManyAndReturnSchema: z.ZodType<Prisma.PollHashtagCreateManyAndReturnArgs> = z.object({ select: PollHashtagSelectObjectSchema.optional(), data: z.union([ PollHashtagCreateManyInputObjectSchema, z.array(PollHashtagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PollHashtagCreateManyAndReturnArgs>;

export const PollHashtagCreateManyAndReturnZodSchema = z.object({ select: PollHashtagSelectObjectSchema.optional(), data: z.union([ PollHashtagCreateManyInputObjectSchema, z.array(PollHashtagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();