import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomCountOutputTypeCountPollsArgsObjectSchema as RoomCountOutputTypeCountPollsArgsObjectSchema } from './RoomCountOutputTypeCountPollsArgs.schema';
import { RoomCountOutputTypeCountMessagesArgsObjectSchema as RoomCountOutputTypeCountMessagesArgsObjectSchema } from './RoomCountOutputTypeCountMessagesArgs.schema';
import { RoomCountOutputTypeCountInvitationsArgsObjectSchema as RoomCountOutputTypeCountInvitationsArgsObjectSchema } from './RoomCountOutputTypeCountInvitationsArgs.schema';
import { RoomCountOutputTypeCountRoomMembersArgsObjectSchema as RoomCountOutputTypeCountRoomMembersArgsObjectSchema } from './RoomCountOutputTypeCountRoomMembersArgs.schema';
import { RoomCountOutputTypeCountReportsArgsObjectSchema as RoomCountOutputTypeCountReportsArgsObjectSchema } from './RoomCountOutputTypeCountReportsArgs.schema'

const makeSchema = () => z.object({
  polls: z.union([z.boolean(), z.lazy(() => RoomCountOutputTypeCountPollsArgsObjectSchema)]).optional(),
  messages: z.union([z.boolean(), z.lazy(() => RoomCountOutputTypeCountMessagesArgsObjectSchema)]).optional(),
  invitations: z.union([z.boolean(), z.lazy(() => RoomCountOutputTypeCountInvitationsArgsObjectSchema)]).optional(),
  roomMembers: z.union([z.boolean(), z.lazy(() => RoomCountOutputTypeCountRoomMembersArgsObjectSchema)]).optional(),
  reports: z.union([z.boolean(), z.lazy(() => RoomCountOutputTypeCountReportsArgsObjectSchema)]).optional()
}).strict();
export const RoomCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.RoomCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.RoomCountOutputTypeSelect>;
export const RoomCountOutputTypeSelectObjectZodSchema = makeSchema();
