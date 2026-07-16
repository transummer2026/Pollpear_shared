import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutOauthsInputObjectSchema as UserCreateWithoutOauthsInputObjectSchema } from './UserCreateWithoutOauthsInput.schema';
import { UserUncheckedCreateWithoutOauthsInputObjectSchema as UserUncheckedCreateWithoutOauthsInputObjectSchema } from './UserUncheckedCreateWithoutOauthsInput.schema';
import { UserCreateOrConnectWithoutOauthsInputObjectSchema as UserCreateOrConnectWithoutOauthsInputObjectSchema } from './UserCreateOrConnectWithoutOauthsInput.schema';
import { UserUpsertWithoutOauthsInputObjectSchema as UserUpsertWithoutOauthsInputObjectSchema } from './UserUpsertWithoutOauthsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutOauthsInputObjectSchema as UserUpdateToOneWithWhereWithoutOauthsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutOauthsInput.schema';
import { UserUpdateWithoutOauthsInputObjectSchema as UserUpdateWithoutOauthsInputObjectSchema } from './UserUpdateWithoutOauthsInput.schema';
import { UserUncheckedUpdateWithoutOauthsInputObjectSchema as UserUncheckedUpdateWithoutOauthsInputObjectSchema } from './UserUncheckedUpdateWithoutOauthsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutOauthsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOauthsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOauthsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutOauthsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutOauthsInputObjectSchema), z.lazy(() => UserUpdateWithoutOauthsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOauthsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutOauthsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutOauthsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutOauthsNestedInput>;
export const UserUpdateOneRequiredWithoutOauthsNestedInputObjectZodSchema = makeSchema();
