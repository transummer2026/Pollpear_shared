import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'username', 'name', 'surname', 'email', 'birthdate', 'passwordHash', 'role', 'gender', 'nationality', 'city', 'state', 'country', 'company', 'bio', 'score', 'isOnline', 'isDeleted', 'isEmailVerified', 'visibility', 'deletedAt', 'lastSeenAt', 'avatarUrl', 'bannerUrl', 'createdAt', 'updatedAt', 'userTheme'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;