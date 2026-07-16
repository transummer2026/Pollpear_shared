import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserNullableScalarRelationFilterObjectSchema as UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { BanAttachmentListRelationFilterObjectSchema as BanAttachmentListRelationFilterObjectSchema } from './BanAttachmentListRelationFilter.schema'

const banwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BanWhereInputObjectSchema), z.lazy(() => BanWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BanWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BanWhereInputObjectSchema), z.lazy(() => BanWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  banReason: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  bannedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  unbannedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  unbanReason: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  bannedById: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  unbannedById: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  bannedBy: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  unbannedBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  attachments: z.lazy(() => BanAttachmentListRelationFilterObjectSchema).optional()
}).strict();
export const BanWhereInputObjectSchema: z.ZodType<Prisma.BanWhereInput> = banwhereinputSchema as unknown as z.ZodType<Prisma.BanWhereInput>;
export const BanWhereInputObjectZodSchema = banwhereinputSchema;
