import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema'

const banscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BanScalarWhereInputObjectSchema), z.lazy(() => BanScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BanScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BanScalarWhereInputObjectSchema), z.lazy(() => BanScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  banReason: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  bannedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  unbannedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  unbanReason: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  bannedById: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  unbannedById: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const BanScalarWhereInputObjectSchema: z.ZodType<Prisma.BanScalarWhereInput> = banscalarwhereinputSchema as unknown as z.ZodType<Prisma.BanScalarWhereInput>;
export const BanScalarWhereInputObjectZodSchema = banscalarwhereinputSchema;
