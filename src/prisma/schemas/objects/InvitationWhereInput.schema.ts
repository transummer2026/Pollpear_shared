import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumInvitationStatusFilterObjectSchema as EnumInvitationStatusFilterObjectSchema } from './EnumInvitationStatusFilter.schema';
import { InvitationStatusSchema } from '../enums/InvitationStatus.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { RoomScalarRelationFilterObjectSchema as RoomScalarRelationFilterObjectSchema } from './RoomScalarRelationFilter.schema';
import { RoomWhereInputObjectSchema as RoomWhereInputObjectSchema } from './RoomWhereInput.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const invitationwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => InvitationWhereInputObjectSchema), z.lazy(() => InvitationWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => InvitationWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => InvitationWhereInputObjectSchema), z.lazy(() => InvitationWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  status: z.union([z.lazy(() => EnumInvitationStatusFilterObjectSchema), InvitationStatusSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  label: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  roomId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  inviterId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  inviteeId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  room: z.union([z.lazy(() => RoomScalarRelationFilterObjectSchema), z.lazy(() => RoomWhereInputObjectSchema)]).optional(),
  inviter: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  invitee: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const InvitationWhereInputObjectSchema: z.ZodType<Prisma.InvitationWhereInput> = invitationwhereinputSchema as unknown as z.ZodType<Prisma.InvitationWhereInput>;
export const InvitationWhereInputObjectZodSchema = invitationwhereinputSchema;
