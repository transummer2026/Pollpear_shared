import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const blockwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BlockWhereInputObjectSchema), z.lazy(() => BlockWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BlockWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BlockWhereInputObjectSchema), z.lazy(() => BlockWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  blockerId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  blockedId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  blocker: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  blocked: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const BlockWhereInputObjectSchema: z.ZodType<Prisma.BlockWhereInput> = blockwhereinputSchema as unknown as z.ZodType<Prisma.BlockWhereInput>;
export const BlockWhereInputObjectZodSchema = blockwhereinputSchema;
