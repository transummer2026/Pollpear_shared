import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserUpdateWithoutOauthsInputObjectSchema as UserUpdateWithoutOauthsInputObjectSchema } from './UserUpdateWithoutOauthsInput.schema';
import { UserUncheckedUpdateWithoutOauthsInputObjectSchema as UserUncheckedUpdateWithoutOauthsInputObjectSchema } from './UserUncheckedUpdateWithoutOauthsInput.schema';
import { UserCreateWithoutOauthsInputObjectSchema as UserCreateWithoutOauthsInputObjectSchema } from './UserCreateWithoutOauthsInput.schema';
import { UserUncheckedCreateWithoutOauthsInputObjectSchema as UserUncheckedCreateWithoutOauthsInputObjectSchema } from './UserUncheckedCreateWithoutOauthsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutOauthsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOauthsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutOauthsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOauthsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutOauthsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutOauthsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutOauthsInput>;
export const UserUpsertWithoutOauthsInputObjectZodSchema = makeSchema();
