import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { PollScalarRelationFilterObjectSchema as PollScalarRelationFilterObjectSchema } from './PollScalarRelationFilter.schema';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './PollWhereInput.schema';
import { OptionScalarRelationFilterObjectSchema as OptionScalarRelationFilterObjectSchema } from './OptionScalarRelationFilter.schema';
import { OptionWhereInputObjectSchema as OptionWhereInputObjectSchema } from './OptionWhereInput.schema'

const polldependencywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PollDependencyWhereInputObjectSchema), z.lazy(() => PollDependencyWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PollDependencyWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PollDependencyWhereInputObjectSchema), z.lazy(() => PollDependencyWhereInputObjectSchema).array()]).optional(),
  childPollId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  optionId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  childPoll: z.union([z.lazy(() => PollScalarRelationFilterObjectSchema), z.lazy(() => PollWhereInputObjectSchema)]).optional(),
  option: z.union([z.lazy(() => OptionScalarRelationFilterObjectSchema), z.lazy(() => OptionWhereInputObjectSchema)]).optional()
}).strict();
export const PollDependencyWhereInputObjectSchema: z.ZodType<Prisma.PollDependencyWhereInput> = polldependencywhereinputSchema as unknown as z.ZodType<Prisma.PollDependencyWhereInput>;
export const PollDependencyWhereInputObjectZodSchema = polldependencywhereinputSchema;
