import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollArgsObjectSchema as PollArgsObjectSchema } from './PollArgs.schema';
import { OptionArgsObjectSchema as OptionArgsObjectSchema } from './OptionArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  childPollId: z.boolean().optional(),
  optionId: z.boolean().optional(),
  childPoll: z.union([z.boolean(), z.lazy(() => PollArgsObjectSchema)]).optional(),
  option: z.union([z.boolean(), z.lazy(() => OptionArgsObjectSchema)]).optional()
}).strict();
export const PollDependencySelectObjectSchema: z.ZodType<Prisma.PollDependencySelect> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencySelect>;
export const PollDependencySelectObjectZodSchema = makeSchema();
