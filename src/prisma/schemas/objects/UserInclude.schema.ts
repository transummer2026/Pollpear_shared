import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OauthFindManySchema as OauthFindManySchema } from '../findManyOauth.schema';
import { PollFindManySchema as PollFindManySchema } from '../findManyPoll.schema';
import { RoomFindManySchema as RoomFindManySchema } from '../findManyRoom.schema';
import { VoteFindManySchema as VoteFindManySchema } from '../findManyVote.schema';
import { MessageFindManySchema as MessageFindManySchema } from '../findManyMessage.schema';
import { NotificationFindManySchema as NotificationFindManySchema } from '../findManyNotification.schema';
import { RoomMemberFindManySchema as RoomMemberFindManySchema } from '../findManyRoomMember.schema';
import { InvitationFindManySchema as InvitationFindManySchema } from '../findManyInvitation.schema';
import { FriendshipFindManySchema as FriendshipFindManySchema } from '../findManyFriendship.schema';
import { BlockFindManySchema as BlockFindManySchema } from '../findManyBlock.schema';
import { ApiKeyFindManySchema as ApiKeyFindManySchema } from '../findManyApiKey.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  oauths: z.union([z.boolean(), z.lazy(() => OauthFindManySchema)]).optional(),
  pollsCreated: z.union([z.boolean(), z.lazy(() => PollFindManySchema)]).optional(),
  roomsCreated: z.union([z.boolean(), z.lazy(() => RoomFindManySchema)]).optional(),
  votes: z.union([z.boolean(), z.lazy(() => VoteFindManySchema)]).optional(),
  messages: z.union([z.boolean(), z.lazy(() => MessageFindManySchema)]).optional(),
  notifications: z.union([z.boolean(), z.lazy(() => NotificationFindManySchema)]).optional(),
  roomMemberships: z.union([z.boolean(), z.lazy(() => RoomMemberFindManySchema)]).optional(),
  invitationsSent: z.union([z.boolean(), z.lazy(() => InvitationFindManySchema)]).optional(),
  invitationsReceived: z.union([z.boolean(), z.lazy(() => InvitationFindManySchema)]).optional(),
  friendshipsAsUserA: z.union([z.boolean(), z.lazy(() => FriendshipFindManySchema)]).optional(),
  friendshipsAsUserB: z.union([z.boolean(), z.lazy(() => FriendshipFindManySchema)]).optional(),
  blocksReceived: z.union([z.boolean(), z.lazy(() => BlockFindManySchema)]).optional(),
  blocksGiven: z.union([z.boolean(), z.lazy(() => BlockFindManySchema)]).optional(),
  apiKeys: z.union([z.boolean(), z.lazy(() => ApiKeyFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectZodSchema = makeSchema();
