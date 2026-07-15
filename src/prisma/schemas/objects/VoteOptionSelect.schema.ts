import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteArgsObjectSchema as VoteArgsObjectSchema } from './VoteArgs.schema';
import { OptionArgsObjectSchema as OptionArgsObjectSchema } from './OptionArgs.schema'

const makeSchema = () => z.object({
  voteId: z.boolean().optional(),
  optionId: z.boolean().optional(),
  vote: z.union([z.boolean(), z.lazy(() => VoteArgsObjectSchema)]).optional(),
  option: z.union([z.boolean(), z.lazy(() => OptionArgsObjectSchema)]).optional()
}).strict();
export const VoteOptionSelectObjectSchema: z.ZodType<Prisma.VoteOptionSelect> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionSelect>;
export const VoteOptionSelectObjectZodSchema = makeSchema();
