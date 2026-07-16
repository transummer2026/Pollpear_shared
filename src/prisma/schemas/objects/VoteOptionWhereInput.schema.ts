import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { VoteScalarRelationFilterObjectSchema as VoteScalarRelationFilterObjectSchema } from './VoteScalarRelationFilter.schema';
import { VoteWhereInputObjectSchema as VoteWhereInputObjectSchema } from './VoteWhereInput.schema';
import { OptionScalarRelationFilterObjectSchema as OptionScalarRelationFilterObjectSchema } from './OptionScalarRelationFilter.schema';
import { OptionWhereInputObjectSchema as OptionWhereInputObjectSchema } from './OptionWhereInput.schema'

const voteoptionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => VoteOptionWhereInputObjectSchema), z.lazy(() => VoteOptionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VoteOptionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VoteOptionWhereInputObjectSchema), z.lazy(() => VoteOptionWhereInputObjectSchema).array()]).optional(),
  voteId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  optionId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  vote: z.union([z.lazy(() => VoteScalarRelationFilterObjectSchema), z.lazy(() => VoteWhereInputObjectSchema)]).optional(),
  option: z.union([z.lazy(() => OptionScalarRelationFilterObjectSchema), z.lazy(() => OptionWhereInputObjectSchema)]).optional()
}).strict();
export const VoteOptionWhereInputObjectSchema: z.ZodType<Prisma.VoteOptionWhereInput> = voteoptionwhereinputSchema as unknown as z.ZodType<Prisma.VoteOptionWhereInput>;
export const VoteOptionWhereInputObjectZodSchema = voteoptionwhereinputSchema;
