import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { RoomStatusSchema } from '../enums/RoomStatus.schema';
import { PollCreateNestedManyWithoutRoomInputObjectSchema as PollCreateNestedManyWithoutRoomInputObjectSchema } from './PollCreateNestedManyWithoutRoomInput.schema';
import { MessageCreateNestedManyWithoutRoomInputObjectSchema as MessageCreateNestedManyWithoutRoomInputObjectSchema } from './MessageCreateNestedManyWithoutRoomInput.schema';
import { InvitationCreateNestedManyWithoutRoomInputObjectSchema as InvitationCreateNestedManyWithoutRoomInputObjectSchema } from './InvitationCreateNestedManyWithoutRoomInput.schema';
import { RoomMemberCreateNestedManyWithoutRoomInputObjectSchema as RoomMemberCreateNestedManyWithoutRoomInputObjectSchema } from './RoomMemberCreateNestedManyWithoutRoomInput.schema';
import { ReportCreateNestedManyWithoutRoomInputObjectSchema as ReportCreateNestedManyWithoutRoomInputObjectSchema } from './ReportCreateNestedManyWithoutRoomInput.schema'

const makeSchema = () => z.object({
  name: z.string().max(255),
  description: z.string().optional().nullable(),
  bannerUrl: z.string().max(255),
  publishedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  visibility: VisibilitySchema,
  status: RoomStatusSchema,
  polls: z.lazy(() => PollCreateNestedManyWithoutRoomInputObjectSchema).optional(),
  messages: z.lazy(() => MessageCreateNestedManyWithoutRoomInputObjectSchema).optional(),
  invitations: z.lazy(() => InvitationCreateNestedManyWithoutRoomInputObjectSchema).optional(),
  roomMembers: z.lazy(() => RoomMemberCreateNestedManyWithoutRoomInputObjectSchema).optional(),
  reports: z.lazy(() => ReportCreateNestedManyWithoutRoomInputObjectSchema).optional()
}).strict();
export const RoomCreateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.RoomCreateWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomCreateWithoutCreatedByInput>;
export const RoomCreateWithoutCreatedByInputObjectZodSchema = makeSchema();
