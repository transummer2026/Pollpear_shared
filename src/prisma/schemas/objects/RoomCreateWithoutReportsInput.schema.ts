import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { RoomStatusSchema } from '../enums/RoomStatus.schema';
import { UserCreateNestedOneWithoutRoomsCreatedInputObjectSchema as UserCreateNestedOneWithoutRoomsCreatedInputObjectSchema } from './UserCreateNestedOneWithoutRoomsCreatedInput.schema';
import { PollCreateNestedManyWithoutRoomInputObjectSchema as PollCreateNestedManyWithoutRoomInputObjectSchema } from './PollCreateNestedManyWithoutRoomInput.schema';
import { MessageCreateNestedManyWithoutRoomInputObjectSchema as MessageCreateNestedManyWithoutRoomInputObjectSchema } from './MessageCreateNestedManyWithoutRoomInput.schema';
import { InvitationCreateNestedManyWithoutRoomInputObjectSchema as InvitationCreateNestedManyWithoutRoomInputObjectSchema } from './InvitationCreateNestedManyWithoutRoomInput.schema';
import { RoomMemberCreateNestedManyWithoutRoomInputObjectSchema as RoomMemberCreateNestedManyWithoutRoomInputObjectSchema } from './RoomMemberCreateNestedManyWithoutRoomInput.schema'

const makeSchema = () => z.object({
  name: z.string().max(255),
  description: z.string().optional().nullable(),
  bannerUrl: z.string().max(255).optional(),
  endsAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  visibility: VisibilitySchema,
  status: RoomStatusSchema,
  createdBy: z.lazy(() => UserCreateNestedOneWithoutRoomsCreatedInputObjectSchema),
  polls: z.lazy(() => PollCreateNestedManyWithoutRoomInputObjectSchema).optional(),
  messages: z.lazy(() => MessageCreateNestedManyWithoutRoomInputObjectSchema).optional(),
  invitations: z.lazy(() => InvitationCreateNestedManyWithoutRoomInputObjectSchema).optional(),
  roomMembers: z.lazy(() => RoomMemberCreateNestedManyWithoutRoomInputObjectSchema).optional()
}).strict();
export const RoomCreateWithoutReportsInputObjectSchema: z.ZodType<Prisma.RoomCreateWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomCreateWithoutReportsInput>;
export const RoomCreateWithoutReportsInputObjectZodSchema = makeSchema();
