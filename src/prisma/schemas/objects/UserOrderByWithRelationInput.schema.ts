import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema";
import { OauthOrderByRelationAggregateInputObjectSchema as OauthOrderByRelationAggregateInputObjectSchema } from "./OauthOrderByRelationAggregateInput.schema";
import { BanOrderByRelationAggregateInputObjectSchema as BanOrderByRelationAggregateInputObjectSchema } from "./BanOrderByRelationAggregateInput.schema";
import { PollOrderByRelationAggregateInputObjectSchema as PollOrderByRelationAggregateInputObjectSchema } from "./PollOrderByRelationAggregateInput.schema";
import { RoomOrderByRelationAggregateInputObjectSchema as RoomOrderByRelationAggregateInputObjectSchema } from "./RoomOrderByRelationAggregateInput.schema";
import { VoteOrderByRelationAggregateInputObjectSchema as VoteOrderByRelationAggregateInputObjectSchema } from "./VoteOrderByRelationAggregateInput.schema";
import { MessageOrderByRelationAggregateInputObjectSchema as MessageOrderByRelationAggregateInputObjectSchema } from "./MessageOrderByRelationAggregateInput.schema";
import { NotificationOrderByRelationAggregateInputObjectSchema as NotificationOrderByRelationAggregateInputObjectSchema } from "./NotificationOrderByRelationAggregateInput.schema";
import { PollTemplateOrderByRelationAggregateInputObjectSchema as PollTemplateOrderByRelationAggregateInputObjectSchema } from "./PollTemplateOrderByRelationAggregateInput.schema";
import { RoomMemberOrderByRelationAggregateInputObjectSchema as RoomMemberOrderByRelationAggregateInputObjectSchema } from "./RoomMemberOrderByRelationAggregateInput.schema";
import { InvitationOrderByRelationAggregateInputObjectSchema as InvitationOrderByRelationAggregateInputObjectSchema } from "./InvitationOrderByRelationAggregateInput.schema";
import { FriendshipOrderByRelationAggregateInputObjectSchema as FriendshipOrderByRelationAggregateInputObjectSchema } from "./FriendshipOrderByRelationAggregateInput.schema";
import { BlockOrderByRelationAggregateInputObjectSchema as BlockOrderByRelationAggregateInputObjectSchema } from "./BlockOrderByRelationAggregateInput.schema";
import { ReportOrderByRelationAggregateInputObjectSchema as ReportOrderByRelationAggregateInputObjectSchema } from "./ReportOrderByRelationAggregateInput.schema";
import { ApiKeyOrderByRelationAggregateInputObjectSchema as ApiKeyOrderByRelationAggregateInputObjectSchema } from "./ApiKeyOrderByRelationAggregateInput.schema";

const makeSchema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      username: SortOrderSchema.optional(),
      name: z
        .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
        .optional(),
      surname: z
        .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
        .optional(),
      email: SortOrderSchema.optional(),
      birthdate: SortOrderSchema.optional(),
      passwordHash: SortOrderSchema.optional(),
      role: SortOrderSchema.optional(),
      gender: SortOrderSchema.optional(),
      nationality: SortOrderSchema.optional(),
      city: z
        .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
        .optional(),
      state: z
        .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
        .optional(),
      country: z
        .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
        .optional(),
      company: z
        .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
        .optional(),
      bio: z
        .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
        .optional(),
      score: SortOrderSchema.optional(),
      isOnline: SortOrderSchema.optional(),
      isDeleted: SortOrderSchema.optional(),
      visibility: z
        .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
        .optional(),
      deletedAt: z
        .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
        .optional(),
      lastSeenAt: z
        .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
        .optional(),
      avatarUrl: SortOrderSchema.optional(),
      bannerUrl: SortOrderSchema.optional(),
      createdAt: SortOrderSchema.optional(),
      updatedAt: SortOrderSchema.optional(),
      userTheme: SortOrderSchema.optional(),
      oauths: z
        .lazy(() => OauthOrderByRelationAggregateInputObjectSchema)
        .optional(),
      bansReceived: z
        .lazy(() => BanOrderByRelationAggregateInputObjectSchema)
        .optional(),
      bansDone: z
        .lazy(() => BanOrderByRelationAggregateInputObjectSchema)
        .optional(),
      bansLifted: z
        .lazy(() => BanOrderByRelationAggregateInputObjectSchema)
        .optional(),
      pollsCreated: z
        .lazy(() => PollOrderByRelationAggregateInputObjectSchema)
        .optional(),
      roomsCreated: z
        .lazy(() => RoomOrderByRelationAggregateInputObjectSchema)
        .optional(),
      votes: z
        .lazy(() => VoteOrderByRelationAggregateInputObjectSchema)
        .optional(),
      messages: z
        .lazy(() => MessageOrderByRelationAggregateInputObjectSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationOrderByRelationAggregateInputObjectSchema)
        .optional(),
      pollTemplates: z
        .lazy(() => PollTemplateOrderByRelationAggregateInputObjectSchema)
        .optional(),
      roomMembers: z
        .lazy(() => RoomMemberOrderByRelationAggregateInputObjectSchema)
        .optional(),
      invitationsSent: z
        .lazy(() => InvitationOrderByRelationAggregateInputObjectSchema)
        .optional(),
      invitationsReceived: z
        .lazy(() => InvitationOrderByRelationAggregateInputObjectSchema)
        .optional(),
      friendshipsRequested: z
        .lazy(() => FriendshipOrderByRelationAggregateInputObjectSchema)
        .optional(),
      friendshipsReceived: z
        .lazy(() => FriendshipOrderByRelationAggregateInputObjectSchema)
        .optional(),
      blocksGiven: z
        .lazy(() => BlockOrderByRelationAggregateInputObjectSchema)
        .optional(),
      blocksReceived: z
        .lazy(() => BlockOrderByRelationAggregateInputObjectSchema)
        .optional(),
      reportsGiven: z
        .lazy(() => ReportOrderByRelationAggregateInputObjectSchema)
        .optional(),
      reportsReceived: z
        .lazy(() => ReportOrderByRelationAggregateInputObjectSchema)
        .optional(),
      apiKeys: z
        .lazy(() => ApiKeyOrderByRelationAggregateInputObjectSchema)
        .optional(),
    })
    .strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> =
  makeSchema() as unknown as z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectZodSchema = makeSchema();
