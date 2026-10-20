import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { PollArgsObjectSchema as PollArgsObjectSchema } from './PollArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  poll: z.union([z.boolean(), z.lazy(() => PollArgsObjectSchema)]).optional()
}).strict();
export const PollTemplateIncludeObjectSchema: z.ZodType<Prisma.PollTemplateInclude> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateInclude>;
export const PollTemplateIncludeObjectZodSchema = makeSchema();
