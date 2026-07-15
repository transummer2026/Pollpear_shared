import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { PollArgsObjectSchema as PollArgsObjectSchema } from './PollArgs.schema'

const makeSchema = () => z.object({
  userId: z.boolean().optional(),
  pollId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  poll: z.union([z.boolean(), z.lazy(() => PollArgsObjectSchema)]).optional()
}).strict();
export const PollTemplateSelectObjectSchema: z.ZodType<Prisma.PollTemplateSelect> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateSelect>;
export const PollTemplateSelectObjectZodSchema = makeSchema();
