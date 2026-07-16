import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  keyHash: SortOrderSchema.optional(),
  appName: SortOrderSchema.optional(),
  revoked: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  ownerId: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ApiKeyOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ApiKeyOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyOrderByWithRelationInput>;
export const ApiKeyOrderByWithRelationInputObjectZodSchema = makeSchema();
