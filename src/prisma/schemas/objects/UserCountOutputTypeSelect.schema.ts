import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCountOutputTypeCountOauthsArgsObjectSchema as UserCountOutputTypeCountOauthsArgsObjectSchema } from './UserCountOutputTypeCountOauthsArgs.schema';
import { UserCountOutputTypeCountBansReceivedArgsObjectSchema as UserCountOutputTypeCountBansReceivedArgsObjectSchema } from './UserCountOutputTypeCountBansReceivedArgs.schema';
import { UserCountOutputTypeCountBansGivenArgsObjectSchema as UserCountOutputTypeCountBansGivenArgsObjectSchema } from './UserCountOutputTypeCountBansGivenArgs.schema';
import { UserCountOutputTypeCountBansLiftedArgsObjectSchema as UserCountOutputTypeCountBansLiftedArgsObjectSchema } from './UserCountOutputTypeCountBansLiftedArgs.schema';
import { UserCountOutputTypeCountPollsCreatedArgsObjectSchema as UserCountOutputTypeCountPollsCreatedArgsObjectSchema } from './UserCountOutputTypeCountPollsCreatedArgs.schema';
import { UserCountOutputTypeCountRoomsCreatedArgsObjectSchema as UserCountOutputTypeCountRoomsCreatedArgsObjectSchema } from './UserCountOutputTypeCountRoomsCreatedArgs.schema';
import { UserCountOutputTypeCountVotesArgsObjectSchema as UserCountOutputTypeCountVotesArgsObjectSchema } from './UserCountOutputTypeCountVotesArgs.schema';
import { UserCountOutputTypeCountMessagesArgsObjectSchema as UserCountOutputTypeCountMessagesArgsObjectSchema } from './UserCountOutputTypeCountMessagesArgs.schema';
import { UserCountOutputTypeCountNotificationsArgsObjectSchema as UserCountOutputTypeCountNotificationsArgsObjectSchema } from './UserCountOutputTypeCountNotificationsArgs.schema';
import { UserCountOutputTypeCountPollTemplatesArgsObjectSchema as UserCountOutputTypeCountPollTemplatesArgsObjectSchema } from './UserCountOutputTypeCountPollTemplatesArgs.schema';
import { UserCountOutputTypeCountRoomMembershipsArgsObjectSchema as UserCountOutputTypeCountRoomMembershipsArgsObjectSchema } from './UserCountOutputTypeCountRoomMembershipsArgs.schema';
import { UserCountOutputTypeCountInvitationsSentArgsObjectSchema as UserCountOutputTypeCountInvitationsSentArgsObjectSchema } from './UserCountOutputTypeCountInvitationsSentArgs.schema';
import { UserCountOutputTypeCountInvitationsReceivedArgsObjectSchema as UserCountOutputTypeCountInvitationsReceivedArgsObjectSchema } from './UserCountOutputTypeCountInvitationsReceivedArgs.schema';
import { UserCountOutputTypeCountFriendshipsAsUserAArgsObjectSchema as UserCountOutputTypeCountFriendshipsAsUserAArgsObjectSchema } from './UserCountOutputTypeCountFriendshipsAsUserAArgs.schema';
import { UserCountOutputTypeCountFriendshipsAsUserBArgsObjectSchema as UserCountOutputTypeCountFriendshipsAsUserBArgsObjectSchema } from './UserCountOutputTypeCountFriendshipsAsUserBArgs.schema';
import { UserCountOutputTypeCountBlocksReceivedArgsObjectSchema as UserCountOutputTypeCountBlocksReceivedArgsObjectSchema } from './UserCountOutputTypeCountBlocksReceivedArgs.schema';
import { UserCountOutputTypeCountBlocksGivenArgsObjectSchema as UserCountOutputTypeCountBlocksGivenArgsObjectSchema } from './UserCountOutputTypeCountBlocksGivenArgs.schema';
import { UserCountOutputTypeCountReportsReceivedArgsObjectSchema as UserCountOutputTypeCountReportsReceivedArgsObjectSchema } from './UserCountOutputTypeCountReportsReceivedArgs.schema';
import { UserCountOutputTypeCountReportsGivenArgsObjectSchema as UserCountOutputTypeCountReportsGivenArgsObjectSchema } from './UserCountOutputTypeCountReportsGivenArgs.schema';
import { UserCountOutputTypeCountApiKeysArgsObjectSchema as UserCountOutputTypeCountApiKeysArgsObjectSchema } from './UserCountOutputTypeCountApiKeysArgs.schema'

const makeSchema = () => z.object({
  oauths: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountOauthsArgsObjectSchema)]).optional(),
  bansReceived: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountBansReceivedArgsObjectSchema)]).optional(),
  bansGiven: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountBansGivenArgsObjectSchema)]).optional(),
  bansLifted: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountBansLiftedArgsObjectSchema)]).optional(),
  pollsCreated: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountPollsCreatedArgsObjectSchema)]).optional(),
  roomsCreated: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountRoomsCreatedArgsObjectSchema)]).optional(),
  votes: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountVotesArgsObjectSchema)]).optional(),
  messages: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountMessagesArgsObjectSchema)]).optional(),
  notifications: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountNotificationsArgsObjectSchema)]).optional(),
  pollTemplates: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountPollTemplatesArgsObjectSchema)]).optional(),
  roomMemberships: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountRoomMembershipsArgsObjectSchema)]).optional(),
  invitationsSent: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountInvitationsSentArgsObjectSchema)]).optional(),
  invitationsReceived: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountInvitationsReceivedArgsObjectSchema)]).optional(),
  friendshipsAsUserA: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountFriendshipsAsUserAArgsObjectSchema)]).optional(),
  friendshipsAsUserB: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountFriendshipsAsUserBArgsObjectSchema)]).optional(),
  blocksReceived: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountBlocksReceivedArgsObjectSchema)]).optional(),
  blocksGiven: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountBlocksGivenArgsObjectSchema)]).optional(),
  reportsReceived: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountReportsReceivedArgsObjectSchema)]).optional(),
  reportsGiven: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountReportsGivenArgsObjectSchema)]).optional(),
  apiKeys: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountApiKeysArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
