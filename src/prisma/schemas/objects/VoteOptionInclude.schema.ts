import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteArgsObjectSchema as VoteArgsObjectSchema } from './VoteArgs.schema';
import { OptionArgsObjectSchema as OptionArgsObjectSchema } from './OptionArgs.schema'

const makeSchema = () => z.object({
  vote: z.union([z.boolean(), z.lazy(() => VoteArgsObjectSchema)]).optional(),
  option: z.union([z.boolean(), z.lazy(() => OptionArgsObjectSchema)]).optional()
}).strict();
export const VoteOptionIncludeObjectSchema: z.ZodType<Prisma.VoteOptionInclude> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionInclude>;
export const VoteOptionIncludeObjectZodSchema = makeSchema();
