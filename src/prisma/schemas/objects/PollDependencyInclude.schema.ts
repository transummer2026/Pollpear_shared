import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollArgsObjectSchema as PollArgsObjectSchema } from './PollArgs.schema';
import { OptionArgsObjectSchema as OptionArgsObjectSchema } from './OptionArgs.schema'

const makeSchema = () => z.object({
  childPoll: z.union([z.boolean(), z.lazy(() => PollArgsObjectSchema)]).optional(),
  option: z.union([z.boolean(), z.lazy(() => OptionArgsObjectSchema)]).optional()
}).strict();
export const PollDependencyIncludeObjectSchema: z.ZodType<Prisma.PollDependencyInclude> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyInclude>;
export const PollDependencyIncludeObjectZodSchema = makeSchema();
