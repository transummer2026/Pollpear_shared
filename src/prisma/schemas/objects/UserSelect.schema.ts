import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OauthFindManySchema as OauthFindManySchema } from '../findManyOauth.schema';
import { BanFindManySchema as BanFindManySchema } from '../findManyBan.schema';
import { PollFindManySchema as PollFindManySchema } from '../findManyPoll.schema';
import { RoomFindManySchema as RoomFindManySchema } from '../findManyRoom.schema';
import { VoteFindManySchema as VoteFindManySchema } from '../findManyVote.schema';
import { MessageFindManySchema as MessageFindManySchema } from '../findManyMessage.schema';
import { NotificationFindManySchema as NotificationFindManySchema } from '../findManyNotification.schema';
import { PollTemplateFindManySchema as PollTemplateFindManySchema } from '../findManyPollTemplate.schema';
import { RoomMemberFindManySchema as RoomMemberFindManySchema } from '../findManyRoomMember.schema';
import { InvitationFindManySchema as InvitationFindManySchema } from '../findManyInvitation.schema';
import { FriendshipFindManySchema as FriendshipFindManySchema } from '../findManyFriendship.schema';
import { BlockFindManySchema as BlockFindManySchema } from '../findManyBlock.schema';
import { ReportFindManySchema as ReportFindManySchema } from '../findManyReport.schema';
import { ApiKeyFindManySchema as ApiKeyFindManySchema } from '../findManyApiKey.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  username: z.boolean().optional(),
  name: z.boolean().optional(),
  surname: z.boolean().optional(),
  email: z.boolean().optional(),
  birthdate: z.boolean().optional(),
  passwordHash: z.boolean().optional(),
  role: z.boolean().optional(),
  gender: z.boolean().optional(),
  nationality: z.boolean().optional(),
  city: z.boolean().optional(),
  state: z.boolean().optional(),
  country: z.boolean().optional(),
  company: z.boolean().optional(),
  bio: z.boolean().optional(),
  score: z.boolean().optional(),
  isOnline: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  visibility: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  lastSeenAt: z.boolean().optional(),
  avatarUrl: z.boolean().optional(),
  bannerUrl: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userTheme: z.boolean().optional(),
  oauths: z.union([z.boolean(), z.lazy(() => OauthFindManySchema)]).optional(),
  bansReceived: z.union([z.boolean(), z.lazy(() => BanFindManySchema)]).optional(),
  bansDone: z.union([z.boolean(), z.lazy(() => BanFindManySchema)]).optional(),
  bansLifted: z.union([z.boolean(), z.lazy(() => BanFindManySchema)]).optional(),
  pollsCreated: z.union([z.boolean(), z.lazy(() => PollFindManySchema)]).optional(),
  roomsCreated: z.union([z.boolean(), z.lazy(() => RoomFindManySchema)]).optional(),
  votes: z.union([z.boolean(), z.lazy(() => VoteFindManySchema)]).optional(),
  messages: z.union([z.boolean(), z.lazy(() => MessageFindManySchema)]).optional(),
  notifications: z.union([z.boolean(), z.lazy(() => NotificationFindManySchema)]).optional(),
  pollTemplates: z.union([z.boolean(), z.lazy(() => PollTemplateFindManySchema)]).optional(),
  roomMembers: z.union([z.boolean(), z.lazy(() => RoomMemberFindManySchema)]).optional(),
  invitationsSent: z.union([z.boolean(), z.lazy(() => InvitationFindManySchema)]).optional(),
  invitationsReceived: z.union([z.boolean(), z.lazy(() => InvitationFindManySchema)]).optional(),
  friendshipsRequested: z.union([z.boolean(), z.lazy(() => FriendshipFindManySchema)]).optional(),
  friendshipsReceived: z.union([z.boolean(), z.lazy(() => FriendshipFindManySchema)]).optional(),
  blocksGiven: z.union([z.boolean(), z.lazy(() => BlockFindManySchema)]).optional(),
  blocksReceived: z.union([z.boolean(), z.lazy(() => BlockFindManySchema)]).optional(),
  reportsGiven: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  reportsReceived: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  apiKeys: z.union([z.boolean(), z.lazy(() => ApiKeyFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectZodSchema = makeSchema();
