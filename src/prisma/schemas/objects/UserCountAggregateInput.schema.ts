import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  username: z.literal(true).optional(),
  name: z.literal(true).optional(),
  surname: z.literal(true).optional(),
  email: z.literal(true).optional(),
  birthdate: z.literal(true).optional(),
  passwordHash: z.literal(true).optional(),
  role: z.literal(true).optional(),
  gender: z.literal(true).optional(),
  nationality: z.literal(true).optional(),
  city: z.literal(true).optional(),
  state: z.literal(true).optional(),
  country: z.literal(true).optional(),
  company: z.literal(true).optional(),
  bio: z.literal(true).optional(),
  score: z.literal(true).optional(),
  isOnline: z.literal(true).optional(),
  isEmailVerified: z.literal(true).optional(),
  visibility: z.literal(true).optional(),
  lastSeenAt: z.literal(true).optional(),
  avatarUrl: z.literal(true).optional(),
  bannerUrl: z.literal(true).optional(),
  userTheme: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const UserCountAggregateInputObjectSchema: z.ZodType<Prisma.UserCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserCountAggregateInputType>;
export const UserCountAggregateInputObjectZodSchema = makeSchema();
