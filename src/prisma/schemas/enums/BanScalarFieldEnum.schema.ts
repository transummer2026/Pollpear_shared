import * as z from 'zod';

export const BanScalarFieldEnumSchema = z.enum(['id', 'banReason', 'bannedAt', 'unbannedAt', 'unbanReason', 'createdAt', 'updatedAt', 'userId', 'bannedById', 'unbannedById'])

export type BanScalarFieldEnum = z.infer<typeof BanScalarFieldEnumSchema>;