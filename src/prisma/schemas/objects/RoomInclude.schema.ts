import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { PollFindManySchema as PollFindManySchema } from '../findManyPoll.schema';
import { MessageFindManySchema as MessageFindManySchema } from '../findManyMessage.schema';
import { InvitationFindManySchema as InvitationFindManySchema } from '../findManyInvitation.schema';
import { RoomMemberFindManySchema as RoomMemberFindManySchema } from '../findManyRoomMember.schema';
import { ReportFindManySchema as ReportFindManySchema } from '../findManyReport.schema';
import { RoomCountOutputTypeArgsObjectSchema as RoomCountOutputTypeArgsObjectSchema } from './RoomCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  polls: z.union([z.boolean(), z.lazy(() => PollFindManySchema)]).optional(),
  messages: z.union([z.boolean(), z.lazy(() => MessageFindManySchema)]).optional(),
  invitations: z.union([z.boolean(), z.lazy(() => InvitationFindManySchema)]).optional(),
  roomMembers: z.union([z.boolean(), z.lazy(() => RoomMemberFindManySchema)]).optional(),
  reports: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => RoomCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const RoomIncludeObjectSchema: z.ZodType<Prisma.RoomInclude> = makeSchema() as unknown as z.ZodType<Prisma.RoomInclude>;
export const RoomIncludeObjectZodSchema = makeSchema();
