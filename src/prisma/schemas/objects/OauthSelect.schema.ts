import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  provider: z.boolean().optional(),
  providerUserId: z.boolean().optional(),
  providerUrl: z.boolean().optional(),
  accessToken: z.boolean().optional(),
  refreshToken: z.boolean().optional(),
  tokenType: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  scope: z.boolean().optional(),
  grantType: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const OauthSelectObjectSchema: z.ZodType<Prisma.OauthSelect> = makeSchema() as unknown as z.ZodType<Prisma.OauthSelect>;
export const OauthSelectObjectZodSchema = makeSchema();
