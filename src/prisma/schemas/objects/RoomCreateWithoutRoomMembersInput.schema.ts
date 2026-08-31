import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { RoomStatusSchema } from '../enums/RoomStatus.schema';
import { UserCreateNestedOneWithoutRoomsCreatedInputObjectSchema as UserCreateNestedOneWithoutRoomsCreatedInputObjectSchema } from './UserCreateNestedOneWithoutRoomsCreatedInput.schema';
import { PollCreateNestedManyWithoutRoomInputObjectSchema as PollCreateNestedManyWithoutRoomInputObjectSchema } from './PollCreateNestedManyWithoutRoomInput.schema';
import { MessageCreateNestedManyWithoutRoomInputObjectSchema as MessageCreateNestedManyWithoutRoomInputObjectSchema } from './MessageCreateNestedManyWithoutRoomInput.schema';
import { InvitationCreateNestedManyWithoutRoomInputObjectSchema as InvitationCreateNestedManyWithoutRoomInputObjectSchema } from './InvitationCreateNestedManyWithoutRoomInput.schema';
import { ReportCreateNestedManyWithoutRoomInputObjectSchema as ReportCreateNestedManyWithoutRoomInputObjectSchema } from './ReportCreateNestedManyWithoutRoomInput.schema'

const makeSchema = () => z.object({
  name: z.string().max(255),
  description: z.string().optional().nullable(),
  bannerUrl: z.string().max(255).optional(),
  endsAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  visibility: VisibilitySchema.optional(),
  status: RoomStatusSchema,
  createdBy: z.lazy(() => UserCreateNestedOneWithoutRoomsCreatedInputObjectSchema),
  polls: z.lazy(() => PollCreateNestedManyWithoutRoomInputObjectSchema).optional(),
  messages: z.lazy(() => MessageCreateNestedManyWithoutRoomInputObjectSchema).optional(),
  invitations: z.lazy(() => InvitationCreateNestedManyWithoutRoomInputObjectSchema).optional(),
  reports: z.lazy(() => ReportCreateNestedManyWithoutRoomInputObjectSchema).optional()
}).strict();
export const RoomCreateWithoutRoomMembersInputObjectSchema: z.ZodType<Prisma.RoomCreateWithoutRoomMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomCreateWithoutRoomMembersInput>;
export const RoomCreateWithoutRoomMembersInputObjectZodSchema = makeSchema();
