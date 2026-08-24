import * as z from 'zod';
import { UserRoleSchema } from '../../enums/UserRole.schema';
import { GenderSchema } from '../../enums/Gender.schema';
import { VisibilitySchema } from '../../enums/Visibility.schema';
import { UserThemeSchema } from '../../enums/UserTheme.schema';
// prettier-ignore
export const UserModelSchema = z.object({
    id: z.number().int(),
    username: z.string(),
    name: z.string().nullable(),
    surname: z.string().nullable(),
    email: z.string(),
    birthdate: z.date(),
    passwordHash: z.string(),
    role: UserRoleSchema,
    gender: GenderSchema,
    nationality: z.string(),
    city: z.string().nullable(),
    state: z.string().nullable(),
    country: z.string().nullable(),
    company: z.string().nullable(),
    bio: z.string().nullable(),
    score: z.number().int(),
    isOnline: z.boolean(),
    isEmailVerified: z.boolean(),
    visibility: VisibilitySchema,
    lastSeenAt: z.date().nullable(),
    avatarUrl: z.string(),
    bannerUrl: z.string(),
    userTheme: UserThemeSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    oauths: z.array(z.unknown()),
    bansReceived: z.array(z.unknown()),
    bansGiven: z.array(z.unknown()),
    bansLifted: z.array(z.unknown()),
    pollsCreated: z.array(z.unknown()),
    roomsCreated: z.array(z.unknown()),
    votes: z.array(z.unknown()),
    messages: z.array(z.unknown()),
    notifications: z.array(z.unknown()),
    pollTemplates: z.array(z.unknown()),
    roomMemberships: z.array(z.unknown()),
    invitationsSent: z.array(z.unknown()),
    invitationsReceived: z.array(z.unknown()),
    friendshipsAsUserA: z.array(z.unknown()),
    friendshipsAsUserB: z.array(z.unknown()),
    blocksReceived: z.array(z.unknown()),
    blocksGiven: z.array(z.unknown()),
    reportsReceived: z.array(z.unknown()),
    reportsGiven: z.array(z.unknown()),
    apiKeys: z.array(z.unknown())
}).strict();

export type UserPureType = z.infer<typeof UserModelSchema>;
