import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const apikeywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ApiKeyWhereInputObjectSchema), z.lazy(() => ApiKeyWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ApiKeyWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ApiKeyWhereInputObjectSchema), z.lazy(() => ApiKeyWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  keyHash: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  appName: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  revoked: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  expiredAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  ownerId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const ApiKeyWhereInputObjectSchema: z.ZodType<Prisma.ApiKeyWhereInput> = apikeywhereinputSchema as unknown as z.ZodType<Prisma.ApiKeyWhereInput>;
export const ApiKeyWhereInputObjectZodSchema = apikeywhereinputSchema;
