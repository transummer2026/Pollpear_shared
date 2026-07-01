import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumInvitationStatusFilterObjectSchema as EnumInvitationStatusFilterObjectSchema } from './EnumInvitationStatusFilter.schema';
import { InvitationStatusSchema } from '../enums/InvitationStatus.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const invitationscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => InvitationScalarWhereInputObjectSchema), z.lazy(() => InvitationScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => InvitationScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => InvitationScalarWhereInputObjectSchema), z.lazy(() => InvitationScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  status: z.union([z.lazy(() => EnumInvitationStatusFilterObjectSchema), InvitationStatusSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  label: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  roomId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  inviterId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  inviteeId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const InvitationScalarWhereInputObjectSchema: z.ZodType<Prisma.InvitationScalarWhereInput> = invitationscalarwhereinputSchema as unknown as z.ZodType<Prisma.InvitationScalarWhereInput>;
export const InvitationScalarWhereInputObjectZodSchema = invitationscalarwhereinputSchema;
