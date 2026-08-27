import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { RoomStatusSchema } from '../enums/RoomStatus.schema';
import { PollUncheckedCreateNestedManyWithoutRoomInputObjectSchema as PollUncheckedCreateNestedManyWithoutRoomInputObjectSchema } from './PollUncheckedCreateNestedManyWithoutRoomInput.schema';
import { InvitationUncheckedCreateNestedManyWithoutRoomInputObjectSchema as InvitationUncheckedCreateNestedManyWithoutRoomInputObjectSchema } from './InvitationUncheckedCreateNestedManyWithoutRoomInput.schema';
import { RoomMemberUncheckedCreateNestedManyWithoutRoomInputObjectSchema as RoomMemberUncheckedCreateNestedManyWithoutRoomInputObjectSchema } from './RoomMemberUncheckedCreateNestedManyWithoutRoomInput.schema';
import { ReportUncheckedCreateNestedManyWithoutRoomInputObjectSchema as ReportUncheckedCreateNestedManyWithoutRoomInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutRoomInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  bannerUrl: z.string().optional(),
  endsAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  visibility: VisibilitySchema,
  status: RoomStatusSchema,
  createdById: z.number().int(),
  polls: z.lazy(() => PollUncheckedCreateNestedManyWithoutRoomInputObjectSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedCreateNestedManyWithoutRoomInputObjectSchema).optional(),
  roomMembers: z.lazy(() => RoomMemberUncheckedCreateNestedManyWithoutRoomInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUncheckedCreateNestedManyWithoutRoomInputObjectSchema).optional()
}).strict();
export const RoomUncheckedCreateWithoutMessagesInputObjectSchema: z.ZodType<Prisma.RoomUncheckedCreateWithoutMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomUncheckedCreateWithoutMessagesInput>;
export const RoomUncheckedCreateWithoutMessagesInputObjectZodSchema = makeSchema();
