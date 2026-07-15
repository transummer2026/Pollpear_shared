import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { PollScalarRelationFilterObjectSchema as PollScalarRelationFilterObjectSchema } from './PollScalarRelationFilter.schema';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './PollWhereInput.schema'

const polltemplatewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PollTemplateWhereInputObjectSchema), z.lazy(() => PollTemplateWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PollTemplateWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PollTemplateWhereInputObjectSchema), z.lazy(() => PollTemplateWhereInputObjectSchema).array()]).optional(),
  userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  pollId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  poll: z.union([z.lazy(() => PollScalarRelationFilterObjectSchema), z.lazy(() => PollWhereInputObjectSchema)]).optional()
}).strict();
export const PollTemplateWhereInputObjectSchema: z.ZodType<Prisma.PollTemplateWhereInput> = polltemplatewhereinputSchema as unknown as z.ZodType<Prisma.PollTemplateWhereInput>;
export const PollTemplateWhereInputObjectZodSchema = polltemplatewhereinputSchema;
