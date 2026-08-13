import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  surname: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  birthdate: SortOrderSchema.optional(),
  passwordHash: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  gender: SortOrderSchema.optional(),
  nationality: SortOrderSchema.optional(),
  city: SortOrderSchema.optional(),
  state: SortOrderSchema.optional(),
  country: SortOrderSchema.optional(),
  company: SortOrderSchema.optional(),
  bio: SortOrderSchema.optional(),
  score: SortOrderSchema.optional(),
  isOnline: SortOrderSchema.optional(),
  isEmailVerified: SortOrderSchema.optional(),
  visibility: SortOrderSchema.optional(),
  lastSeenAt: SortOrderSchema.optional(),
  avatarUrl: SortOrderSchema.optional(),
  bannerUrl: SortOrderSchema.optional(),
  userTheme: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional()
}).strict();
export const UserMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserMinOrderByAggregateInput>;
export const UserMinOrderByAggregateInputObjectZodSchema = makeSchema();
