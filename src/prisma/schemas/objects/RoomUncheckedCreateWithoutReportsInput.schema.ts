import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { RoomStatusSchema } from '../enums/RoomStatus.schema';
import { PollUncheckedCreateNestedManyWithoutRoomInputObjectSchema as PollUncheckedCreateNestedManyWithoutRoomInputObjectSchema } from './PollUncheckedCreateNestedManyWithoutRoomInput.schema';
import { MessageUncheckedCreateNestedManyWithoutRoomInputObjectSchema as MessageUncheckedCreateNestedManyWithoutRoomInputObjectSchema } from './MessageUncheckedCreateNestedManyWithoutRoomInput.schema';
import { InvitationUncheckedCreateNestedManyWithoutRoomInputObjectSchema as InvitationUncheckedCreateNestedManyWithoutRoomInputObjectSchema } from './InvitationUncheckedCreateNestedManyWithoutRoomInput.schema';
import { RoomMemberUncheckedCreateNestedManyWithoutRoomInputObjectSchema as RoomMemberUncheckedCreateNestedManyWithoutRoomInputObjectSchema } from './RoomMemberUncheckedCreateNestedManyWithoutRoomInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  publishedAt: z.coerce.date().optional().nullable(),
  bannerUrl: z.string(),
  visibility: VisibilitySchema,
  status: RoomStatusSchema,
  createdById: z.number().int(),
  polls: z.lazy(() => PollUncheckedCreateNestedManyWithoutRoomInputObjectSchema).optional(),
  messages: z.lazy(() => MessageUncheckedCreateNestedManyWithoutRoomInputObjectSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedCreateNestedManyWithoutRoomInputObjectSchema).optional(),
  roomMembers: z.lazy(() => RoomMemberUncheckedCreateNestedManyWithoutRoomInputObjectSchema).optional()
}).strict();
export const RoomUncheckedCreateWithoutReportsInputObjectSchema: z.ZodType<Prisma.RoomUncheckedCreateWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomUncheckedCreateWithoutReportsInput>;
export const RoomUncheckedCreateWithoutReportsInputObjectZodSchema = makeSchema();
