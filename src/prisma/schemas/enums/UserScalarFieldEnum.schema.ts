import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'username', 'name', 'surname', 'email', 'birthdate', 'passwordHash', 'role', 'gender', 'nationality', 'city', 'state', 'country', 'company', 'bio', 'score', 'isOnline', 'isEmailVerified', 'visibility', 'lastSeenAt', 'avatarUrl', 'bannerUrl', 'userTheme', 'createdAt', 'updatedAt', 'deletedAt'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;