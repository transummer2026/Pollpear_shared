import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { RoomStatusSchema } from '../enums/RoomStatus.schema';
import { UserCreateNestedOneWithoutRoomsCreatedInputObjectSchema as UserCreateNestedOneWithoutRoomsCreatedInputObjectSchema } from './UserCreateNestedOneWithoutRoomsCreatedInput.schema';
import { PollCreateNestedManyWithoutRoomInputObjectSchema as PollCreateNestedManyWithoutRoomInputObjectSchema } from './PollCreateNestedManyWithoutRoomInput.schema';
import { InvitationCreateNestedManyWithoutRoomInputObjectSchema as InvitationCreateNestedManyWithoutRoomInputObjectSchema } from './InvitationCreateNestedManyWithoutRoomInput.schema';
import { RoomMemberCreateNestedManyWithoutRoomInputObjectSchema as RoomMemberCreateNestedManyWithoutRoomInputObjectSchema } from './RoomMemberCreateNestedManyWithoutRoomInput.schema';
import { ReportCreateNestedManyWithoutRoomInputObjectSchema as ReportCreateNestedManyWithoutRoomInputObjectSchema } from './ReportCreateNestedManyWithoutRoomInput.schema'

const makeSchema = () => z.object({
  name: z.string().max(255),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  publishedAt: z.coerce.date().optional().nullable(),
  bannerUrl: z.string().max(255),
  visibility: VisibilitySchema,
  status: RoomStatusSchema,
  createdBy: z.lazy(() => UserCreateNestedOneWithoutRoomsCreatedInputObjectSchema),
  polls: z.lazy(() => PollCreateNestedManyWithoutRoomInputObjectSchema).optional(),
  invitations: z.lazy(() => InvitationCreateNestedManyWithoutRoomInputObjectSchema).optional(),
  roomMembers: z.lazy(() => RoomMemberCreateNestedManyWithoutRoomInputObjectSchema).optional(),
  reports: z.lazy(() => ReportCreateNestedManyWithoutRoomInputObjectSchema).optional()
}).strict();
export const RoomCreateWithoutMessagesInputObjectSchema: z.ZodType<Prisma.RoomCreateWithoutMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomCreateWithoutMessagesInput>;
export const RoomCreateWithoutMessagesInputObjectZodSchema = makeSchema();
