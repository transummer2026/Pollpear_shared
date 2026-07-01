import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const voteoptionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => VoteOptionWhereInputObjectSchema), z.lazy(() => VoteOptionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VoteOptionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VoteOptionWhereInputObjectSchema), z.lazy(() => VoteOptionWhereInputObjectSchema).array()]).optional(),
  voteId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  optionId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const VoteOptionWhereInputObjectSchema: z.ZodType<Prisma.VoteOptionWhereInput> = voteoptionwhereinputSchema as unknown as z.ZodType<Prisma.VoteOptionWhereInput>;
export const VoteOptionWhereInputObjectZodSchema = voteoptionwhereinputSchema;
