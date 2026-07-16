import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateNestedOneWithoutApiKeysInputObjectSchema as UserCreateNestedOneWithoutApiKeysInputObjectSchema } from './UserCreateNestedOneWithoutApiKeysInput.schema'

const makeSchema = () => z.object({
  keyHash: z.string().max(255),
  appName: z.string().max(255),
  revoked: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutApiKeysInputObjectSchema)
}).strict();
export const ApiKeyCreateInputObjectSchema: z.ZodType<Prisma.ApiKeyCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyCreateInput>;
export const ApiKeyCreateInputObjectZodSchema = makeSchema();
