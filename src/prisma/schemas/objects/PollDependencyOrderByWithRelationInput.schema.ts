import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PollOrderByWithRelationInputObjectSchema as PollOrderByWithRelationInputObjectSchema } from './PollOrderByWithRelationInput.schema';
import { OptionOrderByWithRelationInputObjectSchema as OptionOrderByWithRelationInputObjectSchema } from './OptionOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  childPollId: SortOrderSchema.optional(),
  optionId: SortOrderSchema.optional(),
  childPoll: z.lazy(() => PollOrderByWithRelationInputObjectSchema).optional(),
  option: z.lazy(() => OptionOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const PollDependencyOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PollDependencyOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyOrderByWithRelationInput>;
export const PollDependencyOrderByWithRelationInputObjectZodSchema = makeSchema();
