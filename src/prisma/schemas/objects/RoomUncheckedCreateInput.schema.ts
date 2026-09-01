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
  name: z.string().max(255),
  description: z.string().optional().nullable(),
  bannerUrl: z.string().max(255).optional(),
  endsAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  visibility: VisibilitySchema.optional(),
  status: RoomStatusSchema,
  createdById: z.number().int(),
  polls: z.lazy(() => PollUncheckedCreateNestedManyWithoutRoomInputObjectSchema).optional(),
  messages: z.lazy(() => MessageUncheckedCreateNestedManyWithoutRoomInputObjectSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedCreateNestedManyWithoutRoomInputObjectSchema).optional(),
  roomMembers: z.lazy(() => RoomMemberUncheckedCreateNestedManyWithoutRoomInputObjectSchema).optional()
}).strict();
export const RoomUncheckedCreateInputObjectSchema: z.ZodType<Prisma.RoomUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomUncheckedCreateInput>;
export const RoomUncheckedCreateInputObjectZodSchema = makeSchema();
